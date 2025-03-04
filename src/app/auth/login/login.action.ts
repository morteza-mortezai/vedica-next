import { loginSchema, FormState } from '@/app/auth/login/definition'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { login } from './login.service'

const mutation = useMutation({
  mutationFn: login,
  onSuccess: () => {

 
  },
})

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

mutation.mutate({phone,password})
}