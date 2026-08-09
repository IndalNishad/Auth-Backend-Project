import { z } from "zod";

export const registerSchema =
    z.object({
        email: z
            .string()
            .trim()
            .email( "Please provide a valid email"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters long")
            .max(128, "Password must be at most 128 characters long"),
        confirmPassword: z
            .string()
            .min(1, "Please confirm your password")

    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
    });
