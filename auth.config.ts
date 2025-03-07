import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
    
            if (isOnDashboard) {
                return isLoggedIn; // If not logged in, redirect via middleware
            }
            
            return true;
        },
    },
    
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;