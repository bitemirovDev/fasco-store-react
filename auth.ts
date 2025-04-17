import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/prisma/prisma-client';
import authConfig from '@/auth.config';

export const { handlers, signIn, signOut, auth } = NextAuth({
  events: {
    async linkAccount({ user }) {
      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          emailVerified: new Date(),
        },
      });

      return;
    },
  },
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
});
