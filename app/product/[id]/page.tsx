import { prisma } from '@/prisma/prisma-client';
import {
  DealsSection,
  FeaturesSection,
  SubscribeSection,
  ProductDetailsSection,
} from '@/components/sections';
import { notFound } from 'next/navigation';

import CartDrawer from '@/components/shared/CartDrawer/CartDrawer';

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
      <CartDrawer />
    </>
  );
}
