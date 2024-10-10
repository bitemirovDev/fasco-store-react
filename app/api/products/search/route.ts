import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';
import { URL } from 'url';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.nextUrl);
  const query = searchParams.get('query') || '';

  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
  });

  return NextResponse.json(products);
}
