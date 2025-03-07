'use server'
import { signIn } from '../../../../auth';
import { loginSchema, FormState } from '@/app/auth/login/definition'


export async function loginAction(state: FormState, formData: FormData) {

  const validatedFields = loginSchema.safeParse({
    phone: formData.get('phone'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { phone, password } = validatedFields.data

  try {
    await signIn('credentials', { phone, password })

  } catch (error) {
    throw (error)
    // return {
    //   message: 'نام کاربری یا کلمه عبور اشتباه است'
    // }
  }

}