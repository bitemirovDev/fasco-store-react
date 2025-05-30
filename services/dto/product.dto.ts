import { ProductDiscount } from '@prisma/client';
import { ProductImages } from '@/types/product';

export interface ProductDTO {
  id: string;
  name: string;
  price: number;
  img: ProductImages;
  stock: number;
  discount: ProductDiscount | null;
  sizes:
    | {
        name: string;
        quantity: number;
      }[]
    | null;
}
