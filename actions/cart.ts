'use server';

import { prisma } from '@/prisma/prisma-client';
// import { cookies } from 'next/headers';

export const createCart = async () => {
  try {
    const cart = await prisma.cart.create({
      data: {
        token: crypto.randomUUID(),
        cartItems: {
          create: [],
        },
      },
    });

    return cart;
  } catch (error) {
    console.log('Create cart error', error);
  }
};

export const getOrCreateCart = async (token?: string) => {
  if (token) {
    try {
      const userCart = await prisma.cart.findFirst({
        where: {
          token: token,
        },
        include: {
          cartItems: true,
        },
      });

      return userCart;
    } catch (error) {
      console.log('getOrCreateCart error', error);
    }
  }

  return createCart();
};
