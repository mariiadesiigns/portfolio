import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(1, "First name is required").max(80),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
