import { NextResponse } from 'next/server';
import { prisma } from '@/prisma/prisma-client';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const sizes = searchParams.get('sizes')?.split(',') ?? [];
  const brands = searchParams.get('brands')?.split(',') ?? [];
  const categories = searchParams.get('categories')?.split(',') ?? [];
  const collections = searchParams.get('collections')?.split(',') ?? [];
  const priceFrom = Number(searchParams.get('priceFrom') ?? 0);
  const priceTo = Number(searchParams.get('priceTo') ?? 500);

  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 9;
  const skip = (page - 1) * limit;

  const filterConditions = {
    ...(sizes.length && {
      sizes: {
        some: {
          name: { in: sizes },
        },
      },
    }),
    ...(brands.length && {
      brand: {
        id: { in: brands.map(Number) },
      },
    }),
    ...(categories.length && {
      categories: {
        some: {
          id: { in: categories.map(Number) },
        },
      },
    }),
    ...(collections.length && {
      collections: {
        some: {
          id: { in: collections.map(Number) },
        },
      },
    }),
    price: {
      gte: priceFrom,
      lte: priceTo,
    },
  };

  const [products, totalCount] = await Promise.all([
    prisma.product.findMany({
      where: filterConditions,
      skip,
      take: limit,
    }),
    prisma.product.count({
      where: filterConditions,
    }),
  ]);

  return NextResponse.json({ products, totalPages: Math.ceil(totalCount / limit) });
}
