import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3).max(30),
  email : z.string().email(),
  subject: z.string().max(120),
  message: z.string().max(1000),
})
