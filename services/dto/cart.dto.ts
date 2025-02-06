import { Cart, CartItem, Product, Discount } from "@prisma/client";

export type CartItemDTO = CartItem & {
  product: Product & {
    availableSizes: {
      size: {
        id: number;
        name: string;
      };
    }[];
    img: {
      main: string;
    };
    discount: Discount | null;
  };
};

export interface CartDTO extends Cart {
  cartItems: CartItemDTO[];
}
