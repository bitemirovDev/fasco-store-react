import type { CartItemState } from '@/types/cart';

export const updateCartSubtotal = (items: CartItemState[]) => {
  const subtotal = items.reduce((acc, item) => acc + item.totalAmount, 0);
  return subtotal;
};
