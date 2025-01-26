import { Product, Discount, Collection, Category, Brand, Size } from '@prisma/client';

export type ProductSize = {
  quantity: number;
  id: number;
  name: string;
};

export type ProductPrismaSize = {
  quantity: number;
  size: Size;
};

export type ProductImages = {
  main: string;
  second: string;
  third: string;
  fourth: string;
};

export type ProductWithRelations = Product & {
  img: ProductImages;
  collections?: Collection[];
  sizes?: ProductPrismaSize[] | null;
  discount?: Discount;
  categories?: Category[];
  brand?: Brand;
};
