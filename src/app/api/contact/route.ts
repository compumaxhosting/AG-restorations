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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
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
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const safeServiceTitle = escapeHtml(
    service.charAt(0).toUpperCase() + service.slice(1)
  );

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
    <div style="display:none;font-size:1px;color:#f5f5f5;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
      New contact request from ${safeName} for ${safeServiceTitle} service.
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f5f5f5;margin:0;padding:0;border-collapse:collapse;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="640" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:640px;background:#ffffff;border:1px solid #e5e7eb;border-collapse:separate;">
            <tr>
              <td style="padding:20px 24px;background:#003269;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;">
                <div style="font-size:20px;line-height:1.2;font-weight:700;color:#ffffff;">AG Restorations</div>
                <div style="font-size:13px;line-height:1.5;color:#dbeafe;margin-top:4px;">New Query</div>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 24px 6px 24px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;">
                <span style="display:inline-block;background:#e63a27;color:#ffffff;font-size:12px;font-weight:700;letter-spacing:0.2px;padding:6px 10px;">${safeServiceTitle}</span>
                <h2 style="margin:14px 0 0 0;font-size:22px;line-height:1.3;color:#003269;font-weight:700;">New Contact Form Submission</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 24px 8px 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;">
                  <tr>
                    <td valign="top" style="width:130px;padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;font-weight:700;">Name</td>
                    <td valign="top" style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">${safeName}</td>
                  </tr>
                  <tr>
                    <td valign="top" style="width:130px;padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;font-weight:700;">Email</td>
                    <td valign="top" style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">${safeEmail}</td>
                  </tr>
                  <tr>
                    <td valign="top" style="width:130px;padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;font-weight:700;">Phone</td>
                    <td valign="top" style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">${safePhoneNumber}</td>
                  </tr>
                  <tr>
                    <td valign="top" style="width:130px;padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:13px;color:#6b7280;font-weight:700;">Service</td>
                    <td valign="top" style="padding:10px 0;border-bottom:1px solid #e5e7eb;font-size:14px;color:#111827;">${safeServiceTitle}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 24px 26px 24px;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;">
                <div style="font-size:13px;color:#6b7280;font-weight:700;margin-bottom:8px;">Message</div>
                <div style="font-size:14px;line-height:1.7;color:#111827;background:#f9fafb;border:1px solid #e5e7eb;padding:14px;">${safeMessage}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
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
      console.error("Resend send error:", error);

      return NextResponse.json(
        { error: "Unable to send message right now. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact API unexpected error:", error);

    return NextResponse.json(
      { error: "Unable to send message right now. Please try again later." },
      { status: 500 }
    );
  }
}
