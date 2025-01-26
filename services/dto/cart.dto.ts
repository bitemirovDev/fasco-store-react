import { Cart, CartItem, Product } from '@prisma/client';

export type CartItemDTO = CartItem & {
  product: Product & {
    size: {
      id: number;
      name: string;
      stock: number;
    }[];
    img: string;
  };
};

export interface CartDTO extends Cart {
  cartItems: CartItemDTO[];
}
