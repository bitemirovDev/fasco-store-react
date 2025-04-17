import { CartItemDTO } from '@/services/dto/cart.dto';
import type { CartItemState } from '@/types/cart';

export function getCartItemDetails(cartItem: CartItemDTO): CartItemState {
  return {
    id: cartItem.id,
    productId: cartItem.productId,
    quantity: cartItem.quantity,
    img: cartItem.img,
    name: cartItem.title,
    size: cartItem.size.name,
    totalAmount: cartItem.price * cartItem.quantity,
  };
}
