interface CartItemState {
  id: string;
  productId: string;
  quantity: number;
  img: string;
  name: string;
  size: string;
  totalAmount: number;
}

type CartState = {
  cartId: number | null;
  subtotal: number;
  items: CartItemState[];
  updateItemQuantity: (cartItemId: string, quantity: number) => void;
  addItem: (item: CartItemState) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

type CartStoreProps = CartState & {
  loading: boolean;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export type { CartItemState, CartState, CartStoreProps };
