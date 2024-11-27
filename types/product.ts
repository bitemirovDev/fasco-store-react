import { Product, Discount, Size, Collection, Category, Brand } from '@prisma/client';

export type ProductSizes = {
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
  collections: Collection[];
  sizes?: ProductSizes[] | null;
  discount?: Discount;
  categories: Category[];
  brand: Brand;
};
