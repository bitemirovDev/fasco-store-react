import { Cart, CartItem } from '@prisma/client';

export type CartItemDTO = CartItem & {
  size: {
    name: string;
  };
};

export interface CartDTO extends Cart {
  cartItems: CartItemDTO[];
}
