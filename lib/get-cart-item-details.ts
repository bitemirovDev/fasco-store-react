import { CartItemDTO } from '@/services/dto/cart.dto';
import { CartItemState } from '@/store/useCartStore';

export function getCartItemDetails(cartItem: CartItemDTO): CartItemState {
  return {
    id: cartItem.id,
    quantity: cartItem.quantity,
    img: cartItem.img,
    title: cartItem.title,
    size: cartItem.size.name,
    totalAmount: cartItem.price * cartItem.quantity,
  };
}
