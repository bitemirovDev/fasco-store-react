import { CartDTO } from '@/services/dto/cart.dto';
import { CartItemState } from '@/store/useCartStore';
import { getCartItemDetails } from './get-cart-item-details';

interface ReturnProps {
  totalAmount: number;
  items: CartItemState[];
}

export function getCartDetails(data: CartDTO): ReturnProps {
  const items = data.cartItems.map((item) => getCartItemDetails(item));

  return {
    totalAmount: data.totalAmount,
    items: items,
  };
}
