import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { URL } from 'url';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl);
  const query = searchParams.get('query') || '';

  const products = await prisma.product.findMany({
    // where: {
    //   name: {
    //     contains: query,
    //     mode: 'insensitive',
    //   },
    // },
    where: {
      brand: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    },
    include: {
      brand: {
        select: { name: true },
      },
      categories: {
        select: { name: true },
      },
    },
  });

  const result_dict: { brand: string; quantity: number; category?: string }[] = [];

  // Проходим по каждому продукту
  products.forEach((product) => {
    const brandName = product.brand?.name;
    const categoryName = product.categories.map((item) => item.name);
    const item = result_dict.find((item) => item.brand === brandName);

    if (item) item.quantity += 1;
    else
      result_dict.push({
        brand: brandName,
        quantity: 1,
      });

    categoryName.forEach((category) => {
      const item = result_dict.find(
        (item) => item.brand === brandName && item.category === category,
      );

      if (item) item.quantity += 1;
      else
        result_dict.push({
          brand: brandName,
          quantity: 1,
          category: category,
        });
    });
  });

  return NextResponse.json(result_dict);
}
