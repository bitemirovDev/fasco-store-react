import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      include: {
        categories: {
          select: { id: true, name: true },
        },
        collections: {
          select: { id: true, name: true },
        },
        discount: {
          select: { id: true, name: true, percent: true },
        },
        brand: {
          select: { id: true, name: true },
        },
        sizes: {
          select: {
            quantity: true,
            sizeId: true,
          },
        },
        img: {
          select: {
            main: true,
            second: true,
            third: true,
            fourth: true,
          },
        },
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
