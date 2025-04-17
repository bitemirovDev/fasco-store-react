'use server';
import { prisma } from '@/prisma/prisma-client';

export const getUserByEmail = async (email: string) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existingUser) {
      return null;
    }

    return existingUser;
  } catch (error) {
    console.log('getUserByEmail', error);
    throw new Error(error);
  }
};

export const getUserById = async (id: string) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!existingUser) {
      return {
        error: 'User does not exist',
      };
    }

    return existingUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
