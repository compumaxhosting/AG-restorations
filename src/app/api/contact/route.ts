import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema, mapZodFieldErrors } from "@/lib/contact-schema";

function parseEmailList(value?: string) {
  return (value || "")
    .split(/[\s,;]+/)
    .map((email) => email.trim())
    .filter(Boolean);
}

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmails = parseEmailList(process.env.CONTACT_TO_EMAIL);
const contactCcEmails = parseEmailList(process.env.CONTACT_CC_EMAIL);
const contactBccEmails = parseEmailList(process.env.CONTACT_BCC_EMAIL);
const contactFromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const isProduction = process.env.NODE_ENV === "production";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getErrorMessage(error: unknown) {
  if (!error) return "Unknown error";
  if (typeof error === "string") return error;
  if (error instanceof Error) return error.message;
  if (typeof error === "object" && "message" in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === "string") return message;
  }
  return "Unknown error";
}

export async function POST(request: Request) {
  let requestBody: unknown;

  try {
    requestBody = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validation = contactFormSchema.safeParse(requestBody);

  if (!validation.success) {
    return NextResponse.json(
      {
        error: "Please correct the highlighted fields.",
        fieldErrors: mapZodFieldErrors(validation.error),
      },
      { status: 400 }
    );
  }

  if (!resend || contactToEmails.length === 0) {
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Please set RESEND_API_KEY and CONTACT_TO_EMAIL.",
      },
      { status: 500 }
    );
  }

  const { name, email, phoneNumber, service, message } = validation.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhoneNumber = escapeHtml(phoneNumber);
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const text = [
    "New Contact Request",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phoneNumber}`,
    `Service: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New Contact Request</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Phone:</strong> ${safePhoneNumber}</p>
    <p><strong>Service:</strong> ${safeService}</p>
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
  `;

  try {
    const { error } = await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmails,
      ...(contactCcEmails.length > 0 ? { cc: contactCcEmails } : {}),
      ...(contactBccEmails.length > 0 ? { bcc: contactBccEmails } : {}),
      replyTo: email,
      subject: `New Lead: ${service} - ${name}`,
      text,
      html,
    });

    if (error) {
      const reason = getErrorMessage(error);
      console.error("Resend send error:", reason);

      return NextResponse.json(
        {
          error: "Unable to send message right now. Please try again later.",
          ...(isProduction ? {} : { reason }),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    const reason = getErrorMessage(error);
    console.error("Contact API unexpected error:", reason);

    return NextResponse.json(
      {
        error: "Unable to send message right now. Please try again later.",
        ...(isProduction ? {} : { reason }),
      },
      { status: 500 }
    );
  }
}
