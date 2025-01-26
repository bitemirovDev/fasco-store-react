import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import {
  DealsSection,
  FeaturesSection,
  SubscribeSection,
  ProductDetailsSection,
} from '@/components/sections';

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      sizes: { select: { quantity: true, size: true } },
      discount: true,
      img: {
        select: {
          main: true,
          second: true,
          third: true,
          fourth: true,
        },
      },
    },
  });

  if (!product) return notFound();

  return (
    <>
      <ProductDetailsSection product={product} />
      <FeaturesSection />
      <DealsSection title="People Also Loved" description="Discover the best deals of the month!" />
      <SubscribeSection />
    </>
  );
}
