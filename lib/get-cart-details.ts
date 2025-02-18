import { CartDTO } from "@/services/dto/cart.dto";
import { CartStateItem } from "@/store/useCartDrawer";
import { getCartItemDetails } from "./get-cart-item-details";

interface ReturnProps {
  totalAmount: number;
  cartItems: CartStateItem[];
  freeShipping: { status: boolean; more: number };
}

export function getCartDetails(data: CartDTO): ReturnProps {
  const items = data.cartItems.map((item) => getCartItemDetails(item));
  const freeShippingMore = data.totalAmount >= 200 ? 0 : 200 - data.totalAmount;
  const freeShippingStatus = data.totalAmount >= 200;

  return {
    totalAmount: data.totalAmount,
    cartItems: items,
    freeShipping: {
      status: freeShippingStatus,
      more: freeShippingMore,
    },
  };
}
