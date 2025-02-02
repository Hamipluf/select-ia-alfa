import { object, string } from "zod"

export const SignUpSchema = object({
    email: string().email("Invalid email address"),
    password: string()
        .min(8, "Password must be at least 8 characters long")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
    confirmPassword: string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})