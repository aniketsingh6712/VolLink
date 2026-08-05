const { z } = require("zod");

const registerSchema = z.object({
    body: z.object({
        email: z.email("Invalid email address"),

        password: z
            .string()
            .min(8)
            .max(50)
            .regex(/[A-Z]/, "Must contain one uppercase letter")
            .regex(/[a-z]/, "Must contain one lowercase letter")
            .regex(/[0-9]/, "Must contain one number")
            .regex(/[^A-Za-z0-9]/, "Must contain one special character"),

        confirmPassword: z.string(),
         firstName: z
            .string()
            .trim()
            .min(2)
            .max(100),

        lastName: z
            .string()
            .trim()
            .min(2)
            .max(100),
    }).refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Passwords do not match",
            path: ["confirmPassword"],
        }
    ),
});
const loginSchema = z.object({
    body: z.object({
        email: z
            .string()
            .email(),

        password: z
            .string()
            .min(8),
    }),
});
module.exports = {
    registerSchema,
    loginSchema,
};