import { prisma } from '@/prisma/prisma-client';
import { NextResponse, NextRequest } from 'next/server';
import { updateCartTotalAmount } from '@/lib';

export async function DELETE(req: NextRequest, { params }: { params: { id: number } }) {
  const token = req.cookies.get('cartToken')?.value;

  const id = Number(params?.id);

  if (!id) {
    return NextResponse.json({ message: 'Cart item ID is required' }, { status: 400 });
  }

  try {
    const cartItem = await prisma.cartItem.findFirst({
      where: {
        id: id,
      },
    });

    if (!cartItem) {
      return NextResponse.json({ message: `Cart item with id: ${id} not found` });
    }

    await prisma.cartItem.delete({
      where: {
        id: id,
      },
    });

    const updatedCart = await updateCartTotalAmount(token);

    return NextResponse.json(updatedCart);
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      console.log('Error: ', error.stack);
    }
    return NextResponse.json(
      { message: 'An error occurred while deleting the cart item' },
      { status: 500 },
    );
  }
}
