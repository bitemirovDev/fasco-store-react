import { Product, ProductDiscount, ProductCollection, ProductCategory, ProductBrand } from '@prisma/client';

type ProductWithRelations = Product & {
  collections?: ProductCollection[];
  sizes: ProductSize[];
  discount?: ProductDiscount;
  categories?: ProductCategory[];
  brand?: ProductBrand;
};

interface ProductImages {
  main: string;
  additional: string[];
}

interface ProductSize {
  id: number;
  name: string;
  quantity: number;
}

interface ProductCardData {
  id: string;
  name: string;
  img: ProductImages;
  price: number;
  stock: number;
  rating: number;
}

export type { ProductWithRelations, ProductImages, ProductSize, ProductCardData };
