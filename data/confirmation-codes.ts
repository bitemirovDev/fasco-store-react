'use server';

import { prisma } from '@/prisma/prisma-client';
import { EnterConfirmationCodeSchema } from '@/schemas/schemas';
import zod from 'zod';

export const getCodeByEmail = async (email: string) => {
  try {
    const existingCode = await prisma.confirmationCode.findFirst({
      where: {
        email,
      },
    });

    if (!existingCode) {
      return null;
    }

    return existingCode;
  } catch (error) {
    console.log('getCodeByEmail', error);
    throw new Error(error);
  }
};

export const getCodeByCode = async (code: string) => {
  try {
    const existingCode = await prisma.confirmationCode.findFirst({
      where: {
        code,
      },
    });

    if (!existingCode) {
      return null;
    }

    return existingCode;
  } catch (error) {
    console.log('getCodeByCode', error);
    throw new Error(error);
  }
};

export const verifyConfirmationCode = async (value: zod.infer<typeof EnterConfirmationCodeSchema>) => {
  const validatedFields = EnterConfirmationCodeSchema.safeParse(value);

  if (!validatedFields.success) return { error: 'Invalid fields', success: null };

  const { code } = validatedFields.data;

  try {
    const existingCode = await prisma.confirmationCode.findFirst({
      where: {
        code,
      },
    });

    if (existingCode.expires.getTime() < new Date().getTime() - 10 * 60 * 1000)
      return { error: 'Confirmation code expired', success: null };

    if (!existingCode) return { error: 'Confirmation code not found', success: null };

    return { success: 'Confirmation code verified', error: null };
  } catch (error) {
    console.log('verifyConfirmationCode', error);
    return { success: null, error: 'Something went wrong' };
  }
};
