import { prisma } from '@/prisma/prisma-client';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await prisma.collection.findMany();
  return NextResponse.json(data);
}
