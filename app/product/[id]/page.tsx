import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import {
  DealsSection,
  FeaturesSection,
  SubscribeSection,
  ProductDetailsSection,
} from "@/components/sections";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id),
    },
    include: {
      availableSizes: { select: { stock: true, size: true } },
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
      <DealsSection
        title="People Also Loved"
        description="Discover the best deals of the month!"
      />
      <SubscribeSection />
    </>
  );
}
