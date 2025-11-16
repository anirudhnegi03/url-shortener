import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(25, "Name must be less than 25 characters"),

  email: z.string().min(1, "Email is required").email("Invalid email format"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(25, "Password must be less than 25 characters"),
});
