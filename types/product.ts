import { Product, ProductDiscount, ProductCollection, ProductCategory, ProductBrand } from '@prisma/client';

export type ProductWithRelations = Product & {
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

export interface ProductImages {
  main: string;
  additional: string[];
}

export interface ProductSize {
  name: string;
  quantity: number;
}
