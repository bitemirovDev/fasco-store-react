import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/prisma/prisma-client';
import authConfig from '@/auth.config';

const authInstance = {
  callbacks: {
    async jwt({ token }) {
      return token;
    },
    async session({ session }) {
      return session;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' as const },
  ...authConfig,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authInstance);
