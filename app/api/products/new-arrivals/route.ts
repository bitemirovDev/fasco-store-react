import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams?.get('category') || ''; // получаем ID категории из query-параметров
  const take = categoryId ? 6 : undefined;

  const conditions: {
    collections?: { some: { name: string } };
    categories?: { some: { id: number } };
  }[] = [
    {
      collections: {
        some: {
          name: 'New Arrivals',
        },
      },
    },
  ];

  if (categoryId === '5') {
    conditions.push({ collections: { some: { name: 'Discount' } } });
  } else if (categoryId && categoryId !== '5') {
    conditions.push({ categories: { some: { id: parseInt(categoryId) } } });
  }

  try {
    const products = await prisma.product.findMany({
      where: {
        AND: conditions,
      },
      include: {
        discount: true,
      },
      take: take,
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
