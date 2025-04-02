// import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { SignInSchema } from '@/schemas/schemas';
import { getUserByEmail } from '@/actions/user';
import { verifyPassword } from '@/actions/auth';

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validatedFields = SignInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.passwordHash) return null;

          const passwordValid = await verifyPassword(password, user.passwordHash);

          if (passwordValid)
            return {
              ...user,
              passwordHash: undefined,
            };
        }
      },
    }),
  ],
};
