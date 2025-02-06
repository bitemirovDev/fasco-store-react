import { ProductImages, ProductSize } from "./../../types/product";
import { Discount } from "@prisma/client";

export interface ProductDTO {
  id: number;
  name: string;
  price: number;
  img: ProductImages;
  discount: Discount | null;
  availableSizes: ProductSize[] | null;
  stock: number;
}
