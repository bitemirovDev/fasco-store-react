import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        AND: [
          { tags: { some: { name: 'deals' } } }, // фильтрация по тегу
          { saleId: { not: null } }, // Проверка наличия поля sale
        ],
      },
      include: {
        sale: true, // Включаем информацию о скидке
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
