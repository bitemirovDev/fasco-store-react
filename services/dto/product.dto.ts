import { ProductDiscount } from '@prisma/client';
import { ProductImages, ProductSize } from '@/types/product';

export interface ProductDTO {
  id: string;
  name: string;
  price: number;
  img: ProductImages;
  stock: number;
  discount?: ProductDiscount;
  sizes: ProductSize[];
  rating: number;
}
