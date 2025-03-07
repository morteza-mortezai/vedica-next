import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { loginService } from '@/app/auth/login/login.service';
import { z } from 'zod';
import { ILoginResponse } from '@/app/auth/login/loginResponse';



async function getUser(body: any): Promise<ILoginResponse | undefined> {
    // return {fullName:'morteza'}
    try {
        const data = await loginService(body)
        return data
    } catch (error) {
        console.error('Failed to fetch user:*****', error);
        throw new Error('Failed to fetch user.***');
    }
}

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

                    const loginResponse = await getUser({ phone, password });

                    if (loginResponse)
                        return loginResponse;

                }

                return null

            },

        })
    ],
});