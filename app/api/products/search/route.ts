import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { URL } from 'url';

export interface ResultItem {
  brand: {
    id: number;
    name: string;
  };
  quantity: number;
  category?: {
    id: number;
    name: string;
  };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl);
  const query = searchParams.get('query') || '';

  const products = await prisma.product.findMany({
    where: {
      brand: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    },
    select: {
      brand: {
        select: {
          id: true,
          name: true,
        },
      },
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  const result_dict: ResultItem[] = [];

  // Проходим по каждому продукту
  products.forEach((product) => {
    const brandName = product.brand.name;
    const item = result_dict.find((item) => item.brand.name === brandName);

    if (item) {
      item.quantity += 1;
    } else {
      result_dict.push({
        brand: {
          id: product.brand.id,
          name: product.brand.name,
        },
        quantity: 1,
      });
    }

    product.categories.forEach((category) => {
      const item = result_dict.find((item) => item.brand.name === brandName && item.category?.name === category.name);

      if (item) item.quantity += 1;
      else
        result_dict.push({
          brand: {
            id: product.brand.id,
            name: product.brand.name,
          },
          quantity: 1,
          category: {
            id: category.id,
            name: category.name,
          },
        });
    });
  });

  return NextResponse.json(result_dict);
}
