import { prisma } from '@/prisma/prisma-client';

export async function updateCartTotalAmount(token: string) {
  try {
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
            product: true,
          },
        },
      },
    });

    if (!userCart) {
      return;
    }

    const totalAmount = userCart.cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.totalAmount;
    }, 0);

    return await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount,
      },
      include: {
        cartItems: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            product: true,
          },
        },
      },
    });
  } catch (error) {
    console.log('calcCartTotalAmount', error);
  }
}
