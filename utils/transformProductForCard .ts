import type { Product } from '@prisma/client';
import { parseProductImages } from './parseProductImages';

export const transformProductForCard = (products: Product[]) => {
  const transformedProducts = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      img: parseProductImages(product.img),
      price: product.price,
      stock: product.stock,
      rating: product.rating,
    };
  });

  return transformedProducts;
};
