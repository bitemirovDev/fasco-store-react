import { Product, ProductDiscount, ProductCollection, ProductCategory, ProductBrand } from '@prisma/client';

type ProductWithRelations = Product & {
  collections?: ProductCollection[];
  sizes?:
    | {
        name: string;
        quantity: number;
      }[]
    | null;
  discount?: ProductDiscount;
  categories?: ProductCategory[];
  brand?: ProductBrand;
};

interface ProductImages {
  main: string;
  additional: string[];
}

interface ProductSize {
  name: string;
  quantity: number;
}

export type { ProductWithRelations, ProductImages, ProductSize };
