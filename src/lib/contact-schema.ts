import { z } from "zod";

const serviceOptions = ["roofing", "waterproofing", "gutters"] as const;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters for your name.")
    .max(80, "Name is too long."),
  email: z.string().trim().email("Please enter a valid email address."),
  phoneNumber: z
    .string()
    .trim()
    .regex(/^\d{10,15}$/, "Phone number must be 10 to 15 digits."),
  service: z.enum(serviceOptions, {
    error: "Please select a service.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please enter at least 20 characters in your message.")
    .max(2000, "Message is too long."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export type ContactFormFieldErrors = Partial<Record<keyof ContactFormInput, string>>;

export function mapZodFieldErrors(error: z.ZodError): ContactFormFieldErrors {
  const fieldErrors: ContactFormFieldErrors = {};

  for (const issue of error.issues) {
    const field = issue.path[0];
    if (typeof field !== "string") continue;
    if (field in fieldErrors) continue;
    fieldErrors[field as keyof ContactFormInput] = issue.message;
  }

  return fieldErrors;
}
