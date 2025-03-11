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
            product: {
              include: {
                availableSizes: {
                  select: {
                    stock: true,
                    size: {
                      select: {
                        name: true,
                        id: true,
                      },
                    },
                  },
                },
                img: {
                  select: {
                    main: true,
                  },
                },
                discount: true,
              },
            },
          },
        },
      },
    });

    if (!userCart) {
      return;
    }

    const totalAmount = userCart.cartItems.reduce((acc, item) => {
      return acc + calcCartItemTotalAmount(item);
    }, 0);

    return await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: totalAmount,
      },
      include: {
        cartItems: {
          orderBy: {
            createdAt: 'desc',
          },
          include: {
            product: {
              include: {
                availableSizes: {
                  select: {
                    stock: true,
                    size: {
                      select: {
                        name: true,
                        id: true,
                      },
                    },
                  },
                },
                img: {
                  select: {
                    main: true,
                  },
                },
                discount: true,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.log('calcCartTotalAmount', error);
  }
}
