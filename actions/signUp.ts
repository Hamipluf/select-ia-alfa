'use server'
import * as z from 'zod'
import { SignUpSchema } from '@/lib/zod/shcemas/sign-up-schema'
import customResponses from '@/utils/customResponses'
import bcryptjs from 'bcryptjs'
// import { DB } from '@/db'


export const signUp = async (userData: z.infer<typeof SignUpSchema>) => {
    const validateFields = SignUpSchema.safeParse(userData)
    if (!validateFields.success) return customResponses.badResponse(400, validateFields.error.issues[0].message)
    const { email, password } = validateFields.data
    console.log(email, password)
    try {
        // const userExists = await DB.user.findUnique({ where: { email } })
        // if (userExists) return customResponses.badResponse(400, 'Email already in use!')
        // const hashedPassword = await bcryptjs.hash(password, 10)
        // const newUser = await DB.user.create({ data: { email, password: hashedPassword } })

        return customResponses.responseOk(200, 'Verify your email')
    } catch (error) {
        console.log("ERROR SIGNUP ACTION:  ", error)
        return customResponses.badResponse(500, 'Unexpected error')
    }
} 