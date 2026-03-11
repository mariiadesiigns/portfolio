import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  company: z.string().min(2, "Please enter your company or project name."),
  lookingFor: z.string().min(12, "Please share a bit more context."),
  budgetRange: z.enum([
    "Under $2k",
    "$2k - $5k",
    "$5k - $10k",
    "$10k+"
  ]),
  timeline: z.enum(["ASAP", "1-2 months", "3+ months", "Flexible"])
});

export type ContactValues = z.infer<typeof contactSchema>;
