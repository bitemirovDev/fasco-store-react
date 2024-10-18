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
        saleName: {
          select: { id: true, name: true, percent: true },
        },
        brand: {
          select: { id: true, name: true },
        },
        sizes: {
          select: {
            size: { select: { id: true, name: true } },
            quantity: true,
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
