import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";
import { findOrCreateCart, updateCartTotalAmount } from "@/lib/index";
import crypto from "crypto";

interface CreateCartItemValues {
  productId: number;
  sizeId: number;
  quantity: number;
}

export async function GET(req: NextRequest) {
  const token = req.cookies.get("cartToken")?.value;

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
            createdAt: "desc",
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

    return NextResponse.json(userCart);
  } catch (error) {
    console.log("[CART_GET]", error);
    return NextResponse.json("Не удалось получить корзину", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("cartToken")?.value || crypto.randomUUID();
    const userCart = await findOrCreateCart(token);
    const data = (await req.json()) as CreateCartItemValues;

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productId: data.productId,
        sizeId: data.sizeId,
      },
    });

    // Если товар уже есть в корзине, то увеличиваем его количество
    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + data.quantity,
        },
      });

      // Обновляем сумму корзины и возвращаем ответ
      const updatedCart = await updateCartTotalAmount(token);
      const resp = NextResponse.json(updatedCart);
      resp.cookies.set("cartToken", token);

      return resp;
    }

    // Если товара нет, то создаем его
    await prisma.cartItem.create({
      data: {
        cartId: userCart.id,
        productId: data.productId,
        sizeId: data.sizeId,
        quantity: data.quantity,
      },
    });

    // Обновляем общую сумму корзины
    const updatedCart = await updateCartTotalAmount(token);
    const resp = NextResponse.json(updatedCart);
    resp.cookies.set("cartToken", token);

    return resp;
  } catch (error) {
    console.log("[CART_POST]", error);
    return NextResponse.json("Не удалось создать корзину, попробуйте снова", {
      status: 500,
    });
  }
}
