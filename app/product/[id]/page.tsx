import { prisma } from '@/prisma/prisma-client';
import ProductDetailsSection from '@/components/sections/ProductDetailsSection/ProductDetailsSection';
import { DealsSection, FeaturesSection, SubscribeSection } from '@/components/sections';
import { notFound } from 'next/navigation';

import MiniCart from '@/components/shared/MiniCart/MiniCart';

export default async function ProductPage({ params }) {
  const { id }: { id: string } = await params;
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
      collections: true,
      categories: true,
      brand: true,
    },
  });

  if (!product) return notFound();

  return (
    <>
      <ProductDetailsSection product={product} />
      <FeaturesSection />
      <DealsSection title="People Also Loved" description="Discover the best deals of the month!" />
      <SubscribeSection />
      <MiniCart />
    </>
  );
}
