'use server';
import { prisma } from '@/prisma/prisma-client';
import bcrypt from 'bcryptjs';
import zod from 'zod';
import { SignInSchema, SignUpSchema } from '@/schemas/schemas';
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { DEFAULT_REDIRECT_ROUTE } from '@/routes';
import { getOrCreateCart } from './cart';

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const verifyPassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const registerUser = async (values: zod.infer<typeof SignUpSchema>) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password, first_name, last_name } = validatedFields.data;

  const hashedPassword = await hashPassword(password);

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) return { error: 'Email already in use' };

  try {
    await prisma.user.create({
      data: {
        name: first_name + ' ' + last_name,
        email: email,
        passwordHash: hashedPassword,
      },
    });

    return { success: 'User created successfully', error: null };
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong...', success: null };
  }
};

export const loginUser = async (values: zod.infer<typeof SignInSchema>) => {
  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields' };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    const cart = await getOrCreateCart(email);

    return { success: 'User logged in successfully', error: null, cart };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' };
        default:
          return { error: 'Something went wrong...' };
      }
    }

    throw error;
  }
};

export const signOutUser = async () => {
  await signOut();
};
