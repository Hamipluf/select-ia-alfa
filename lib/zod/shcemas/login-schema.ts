import { object, string } from "zod"

export const LoginSchema = object({
  email: string({ required_error: "Email is required" })
    .email("Email is required"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
})