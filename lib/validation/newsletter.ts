import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().max(80).optional(),
  source: z.enum(["newsletter", "fable"]).optional(),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;
