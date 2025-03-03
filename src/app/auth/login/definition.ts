import { z } from 'zod'

const phoneRegExp = /^(0|98|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

export const loginSchema = z.object({
    phone: z
        .string()
        .regex(phoneRegExp, "شماره همراه معتبر نیست")
        .trim(),
    password: z
        .string()
        .min(6, "کلمه عبور باید حداقل 6 کاراکتر باشد")
        .trim()
});



export type FormState = | {
    errors?: {
        phone?: string[]
        password?: string[]
    }
    message?: string
}
    | undefined