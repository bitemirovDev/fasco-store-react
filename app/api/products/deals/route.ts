import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        AND: [
          { collections: { some: { name: 'Deals' } } }, // фильтрация по тегу
          { saleNameId: { not: null } }, // Проверка наличия поля sale
        ],
      },
      take: 5,
      include: {
        saleName: true, // Включаем информацию о скидке
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
