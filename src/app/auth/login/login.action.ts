'use server'
import { signIn } from '../../../../auth';
import { loginSchema, FormState } from '@/app/auth/login/definition'


export async function loginAction(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = loginSchema.safeParse({
    phone: formData.get('phone'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Call the provider or db to create a user...
  const { phone, password } = validatedFields.data

  try {

    await signIn('credentials', { phone, password })
    // return true
  } catch (error) {
    return {
      message: 'نام کاربری یا کلمه عبور اشتباه است'
    }
  }

}