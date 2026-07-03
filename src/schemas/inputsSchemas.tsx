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

export const phoneNumberSchema = z
  .string()
  .transform((val) => val.replace(/[^\d+]/g, ""))
  .pipe(
    z
      .string()
      .regex(
        /^\+?[1-9]([ \-()]*\d){1,14}$/,
        "Please enter a valid phone number.",
      ),
  );

export const streetAddressSchema = z
  .string()
  .min(5, "Street address must be at least 5 characters.")
  .max(100, "Street address must be at most 100 characters.")
  .regex(
    /^\d+\s[\w\s.,-]+$/,
    "Street address must start with a number followed by a street name.",
  );

export const citySchema = z
  .string()
  .min(2, "City must be at least 2 characters.")
  .max(85, "City must be at most 85 characters.")
  .regex(
    /^[a-zA-ZÀ-ÖØ-öø-ÿ\s''-]+$/,
    "City must contain only letters, spaces, hyphens, or apostrophes.",
  );

export const postalCodeSchema = z
  .string()
  .regex(
    /^[A-Z0-9]{2,5}([\s-]?[A-Z0-9]{2,5})?$/i,
    "Please enter a valid postal code (e.g. 12345, SW1A 1AA, 1234-567).",
  );

export const commentsSchema = z
  .string()
  .max(1000, "Message is too long. Please keep it under 1000 characters.")
  .optional();

export const checkoutFormSchema = z.object({
  fullname: fullNameSchema,
  email: emailSchema,
  phoneNumber: phoneNumberSchema,
  streetAddress: streetAddressSchema,
  city: citySchema,
  postalCode: postalCodeSchema,
  comments: commentsSchema,
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
