import { CartDTO } from '@/services/dto/cart.dto';
import { CartStateItem } from '@/store/useCartDrawer';

interface ReturnProps {
  totalAmount: number;
  cartItems: CartStateItem[];
}

export function getCartDetails(data: CartDTO): ReturnProps {
  const items = data.cartItems.map((item) => ({
    id: item.id,
    quantity: item.quantity,
    img: item.product.img,
    name: item.product.name,
    size: {
      id: 
    }
     
    total: (item.product.price * item.quantity).toFixed(2),
  }));

  return {
    totalAmount: data.totalAmount,
    cartItems: items,
  };
}
