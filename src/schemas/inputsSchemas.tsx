import z from "zod";

export const emailSchema = z.email("Please enter a valid email address.");

export const fullNameSchema = z
  .string()
  .min(2, "Full name must be at least 2 characters.")
  .max(50, "Full name must be at most 50 characters.");

export const messageSubjectSchema = z
  .string()
  .min(5, "Subject must be at least 5 characters.")
  .max(100, "Subject is too long. Please keep it under 100 characters.");

export const messageContentSchema = z
  .string()
  .min(10, "Message must be at least 10 characters.")
  .max(1000, "Message is too long. Please keep it under 1000 characters.");

export const contactFormSchema = z.object({
  fullName: fullNameSchema,
  email: emailSchema,
  subject: messageSubjectSchema,
  message: messageContentSchema,
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
