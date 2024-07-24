'use server'
import { LoginSchema } from "@/lib/zod/shcemas/login-schema";
import customResponses from "@/utils/customResponses";

// import customResponses from "@/utils/customResponses";
// import { signIn } from "../authJs/auth";
// import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
// import { AuthError } from "next-auth";

import { z } from "zod";

export const login = async (userData: z.infer<typeof LoginSchema>, callbackUrl?: string | null) => {
    const validateFields = LoginSchema.safeParse(userData)
    if (!validateFields.success) return customResponses.badResponse(400, validateFields.error.issues[0].message)
    const { email, password } = validateFields.data
    console.log(email, password)
    try {
        // 
    } catch (error) {
        console.log("CATCH LOGIN.ts", error)
        // if (error instanceof AuthError) {
        //     // @ts-expect-error "Incluir en tipo"
        //     if (error.cause?.err?.code === 'credentials') return customResponses.badResponse(400, 'Invalid Credentials')
        // }
        return customResponses.badResponse(500, 'Unexpected error')
    }
}