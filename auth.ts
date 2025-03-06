import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';


async function getUser(email: string): Promise<any | undefined> {
    return true
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({

            async authorize(credentials) {

                await new Promise((res,rej)=>{
                    setTimeout(()=>{
                        res('ok')
                    },3000)
                })
                return false
            },

        })
    ],
});