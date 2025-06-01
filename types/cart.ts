interface CartItemState {
  id: string;
  productId: string;
  quantity: number;
  img: string;
  name: string;
  size: {
    id: number;
    name: string;
  };
  totalAmount: number;
  price: number;
}

interface IResult {
  success?: string;
  error?: string;
}

type CartState = {
  cartId: number | null;
  subtotal: number;
  items: CartItemState[];
  amountForFreeShipping: number;
  updateItemQuantity: (cartItemId: string, type: string, quantity: number) => void;
  addItemToCart: (item: CartItemState) => IResult;
  removeItemFromCart: (id: string) => IResult;
  clearCart: () => void;
  setIsAuthenticated: (value: boolean) => void;
  setCartItems: (items: CartItemState[]) => void;
};

type CartStoreProps = CartState & {
  isAuthenticated: boolean;
  loading: boolean;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export type { CartItemState, CartState, CartStoreProps, IResult };
