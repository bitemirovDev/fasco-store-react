import { CartItemDTO } from '@/services/dto/cart.dto';
import { CartStateItem } from '@/store/useCartDrawer';

export function getCartItemDetails(cartItem: CartItemDTO): CartStateItem {
  return {
    id: cartItem.id,
    quantity: cartItem.quantity,
    img: cartItem.product.img,
    name: cartItem.product.name,
    selectedSize: {
      name: cartItem.product.selectedSize.name,
      maxQuantity: cartItem.product.selectedSize.maxQuantity,
    },
    total: String(cartItem.product.price * cartItem.quantity),
  };
}
