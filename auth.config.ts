// import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GutHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import { SignInSchema } from '@/schemas/schemas';
import { getUserByEmail } from '@/data/user';
import { verifyPassword } from '@/actions/auth';
import type { User } from 'next-auth';

const authConfig = {
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  providers: [
    GutHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      // authorize: async (credentials) => {
      //   const validatedFields = SignInSchema.safeParse(credentials);

      //   if (validatedFields.success) {
      //     const { email, password } = validatedFields.data;

      //     const user = await getUserByEmail(email);

      //     if (!user || !user.passwordHash) return null;

      //     const passwordValid = await verifyPassword(password, user.passwordHash);

      //     if (passwordValid)
      //       return {
      //         ...user,
      //         passwordHash: undefined,
      //       };
      //   }
      // },
      authorize: async (credentials) => {
        const validatedFields = SignInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.passwordHash) return null;

          const passwordValid = await verifyPassword(password, user.passwordHash);

          if (passwordValid) {
            return {
              ...user,
              passwordHash: undefined,
            } as User; // Add this type cast to ensure the return type is User
          } else {
            return null; // Return null instead of undefined
          }
        } else {
          return null; // Return null instead of undefined
        }
      },
    }),
  ],
};

export default authConfig;
