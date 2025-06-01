'use server';
import { getUserByEmail } from '@/data/user';
import { prisma } from '@/prisma/prisma-client';
import type { Cart } from '@prisma/client';

export const createCart = async (userId: string) => {
  try {
    const cart = await prisma.cart.create({
      data: {
        userId,
        cartItems: {
          create: [],
        },
      },
      include: {
        cartItems: {
          select: {
            id: true,
            quantity: true,
            price: true,
            productId: true,
            img: true,
            name: true,
            size: {
              select: {
                id: true,
                name: true,
              },
            },
            totalAmount: true,
          },
        },
      },
    });

    return cart;
  } catch (error) {
    console.log('Create cart error', error);
    throw new Error(error instanceof Error ? error.message : 'Create cart error: Unknown error');
  }
};

export const getOrCreateCart = async (email?: string) => {
  const user = await getUserByEmail(email);

  if (!user) {
    return null;
  }

  try {
    const userCart = await prisma.cart.findUnique({
      where: {
        userId: user.id,
      },
      include: {
        cartItems: {
          select: {
            id: true,
            quantity: true,
            price: true,
            productId: true,
            img: true,
            name: true,
            size: {
              select: {
                id: true,
                name: true,
              },
            },
            totalAmount: true,
          },
        },
      },
    });

    if (!userCart) {
      return createCart(user.id);
    }

    return userCart;
  } catch (error) {
    console.log('getOrCreateCart error', error);
    throw new Error(error instanceof Error ? error.message : 'getOrCreateCart error: Unknown error');
  }
};
