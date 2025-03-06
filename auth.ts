import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { loginService } from '@/app/auth/login/login.service';
import { z } from 'zod';


export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({

            async authorize(credentials) {

                const parsedCredentials = z
                    .object({ phone: z.string(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { phone, password } = parsedCredentials.data;
                    try {
                        const loginResponse = await loginService({ phone, password });
                        return loginResponse;
                    } catch (error) {
                        throw new Error()
                    }

                }

                return null

            },

        })
    ],
});