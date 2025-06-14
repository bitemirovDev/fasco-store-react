import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { DealsSection, FeaturesSection, SubscribeSection, ProductDetailsSection } from '@/components/sections';
import { ProductWithRelations } from '@/types/product';

import type { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
    include: {
      sizes: {
        select: {
          id: true,
          name: true,
          quantity: true,
        },
      },
      discount: true,
    },
  });

  return {
    title: product?.name,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
    include: {
      sizes: {
        select: {
          id: true,
          name: true,
          quantity: true,
        },
      },
      discount: true,
    },
  });

  if (!product) return notFound();

  return (
    <>
      <ProductDetailsSection product={product as ProductWithRelations} />
      <FeaturesSection />
      <DealsSection title="People Also Loved" description="Discover the best deals of the month!" />
      <SubscribeSection />
    </>
  );
}
