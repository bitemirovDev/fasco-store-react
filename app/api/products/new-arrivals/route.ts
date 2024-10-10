import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get('categoryId'); // получаем ID категории из query-параметров

  try {
    const products = await prisma.product.findMany({
      where: {
        AND: [
          { tags: { some: { name: 'new-arrivals' } } }, // фильтрация по тегу
          categoryId ? { categoryId: parseInt(categoryId) } : {}, // фильтрация по категории
        ],
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
