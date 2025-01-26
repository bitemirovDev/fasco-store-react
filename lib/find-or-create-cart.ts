import { prisma } from '@/prisma/prisma-client';

export async function findOrCreateCart(token: string) {
  const userCart = await prisma.cart.findFirst({
    where: {
      token: token,
    },
    include: {
      cartItems: {
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          product: {
            include: {
              sizes: {
                select: {
                  sizeId: true,
                  quantity: true,
                },
              },
              img: {
                select: {
                  main: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!userCart) {
    try {
      const newUserCart = await prisma.cart.create({
        data: {
          token: token,
        },
      });

      return newUserCart;
    } catch (error) {
      console.log('[findOrCreateCart]', error);
    }
  }

  return userCart;
}
