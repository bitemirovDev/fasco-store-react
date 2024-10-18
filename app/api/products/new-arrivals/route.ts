import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('category') || ''; // получаем ID категории из query-параметров

  try {
    const products = await prisma.product.findMany({
      where: {
        AND: [
          {
            collections: {
              some: {
                name: 'New Arrivals',
              },
            },
          },

          // если Discount
          categoryId === '5'
            ? {
                collections: {
                  some: {
                    name: 'Discount',
                  },
                },
              }
            : {},

          // остальные категории
          categoryId !== '5' ? { categories: { some: { id: parseInt(categoryId) } } } : {},
        ],
      },
      take: 6,
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
