import { CartDTO } from "@/services/dto/cart.dto";
import { CartStateItem } from "@/store/useCartDrawer";
import { getCartItemDetails } from "./get-cart-item-details";

interface ReturnProps {
  totalAmount: number;
  cartItems: CartStateItem[];
}

export function getCartDetails(data: CartDTO): ReturnProps {
  const items = data.cartItems.map((item) => getCartItemDetails(item));

  return {
    totalAmount: data.totalAmount,
    cartItems: items,
  };
}
