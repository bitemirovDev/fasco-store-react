'use server';

import zod from 'zod';
import { getUserByEmail } from '@/data/user';
import { NewPasswordSchema, SendConfirmationCodeSchema } from '@/schemas/schemas';
import { generateConfirmationCode } from '@/utils/generate-confirmation-code';
import { sendConfirmationCode } from '@/lib/sendmail';
import { prisma } from '@/prisma/prisma-client';
import { hashPassword } from './auth';

const rtsd = '$2b$10$9ivIb0ixR5.Rl3rzBPneEeo8K53WaaGlfsmapVh.id6FA38QfNjQK';

export const sendCode = async (value: zod.infer<typeof SendConfirmationCodeSchema>) => {
  const validatedFields = SendConfirmationCodeSchema.safeParse(value);

  if (!validatedFields.success) return { error: 'Invalid fields', success: null };

  const { email } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) return { error: 'User with this email does not exist', success: null };

  const generatedCode = await generateConfirmationCode();

  const existingCode = await prisma.confirmationCode.findFirst({ where: { email } });

  if (existingCode) {
    await prisma.confirmationCode.delete({
      where: {
        email,
      },
    });
  }

  await prisma.confirmationCode.create({
    data: {
      code: generatedCode,
      email: email,
      expires: new Date(new Date().getTime() + 10 * 60 * 1000),
    },
  });

  await sendConfirmationCode({ to: email, subject: 'Confirmation Code', generatedCode });

  return { success: 'Письмо с кодом отправлено', error: null };
};

export const saveNewPassword = async (values: zod.infer<typeof NewPasswordSchema>, email: string) => {
  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) return { error: 'Invalid fields' };

  const { password } = validatedFields.data;

  const hashedPassword = await hashPassword(password);

  try {
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        passwordHash: hashedPassword,
      },
    });
  } catch (error) {
    console.log('saveNewPassword', error);
    return { success: null, error: 'Something went wrong' };
  }

  return { success: 'Password changed', error: null, password };
};
