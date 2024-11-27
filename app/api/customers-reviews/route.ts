import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await prisma.customerReview.findMany({
    where: {
      rating: {
        gt: 4,
      },
    },
  });
  return NextResponse.json(data);
}
