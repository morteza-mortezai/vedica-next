import { loginSchema, FormState } from '@/app/auth/login/definition'
 
export async function login(state: FormState, formData: FormData) {
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
}