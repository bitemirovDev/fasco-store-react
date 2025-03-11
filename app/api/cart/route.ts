import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { findOrCreateCart, updateCartTotalAmount } from '@/lib/index';
import crypto from 'crypto';

interface CreateCartItemValues {
  productId: number;
  sizeId: number;
  quantity: number;
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get('cartToken')?.value;

  try {
    if (!token) {
      return NextResponse.json({ totalAmount: 0, cartItems: [] });
    }
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
            size: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    console.log('[CART_GET]', userCart);

    return NextResponse.json(userCart);
  } catch (error) {
    console.log('[CART_GET]', error);
    return NextResponse.json('Не удалось получить корзину', { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('cartToken')?.value || crypto.randomUUID();
    const userCart = await findOrCreateCart(token);
    const data = (await req.json()) as CreateCartItemValues;
    const { productId, sizeId, quantity } = data;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productId: productId,
        sizeId: sizeId,
      },
    });

    // Если товар уже есть в корзине, то увеличиваем его количество
    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + quantity,
        },
      });

      // Обновляем сумму корзины и возвращаем ответ
      const updatedCart = await updateCartTotalAmount(token);
      const resp = NextResponse.json(updatedCart);
      resp.cookies.set('cartToken', token);

      return resp;
    }

    // Если товара нет, то создаем его
    await prisma.cartItem.create({
      data: {},
    });

    // // Обновляем общую сумму корзины
    const updatedCart = await updateCartTotalAmount(token);
    const resp = NextResponse.json(updatedCart);
    resp.cookies.set('cartToken', token);

    return resp;
  } catch (error) {
    console.log('[CART_POST]', error);
    return NextResponse.json('Не удалось создать корзину, попробуйте снова', {
      status: 500,
    });
  }
}
