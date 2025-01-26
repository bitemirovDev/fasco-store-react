import { create } from 'zustand';
import { Api } from '@/services/api-client';
// import { getCartItemDetails } from '@/lib/get-cart-item-details';
import { getCartDetails } from '@/lib/get-cart-details';

export interface CartStateItem {
  id: number;
  quantity: number;
  img: string;
  name: string;
  size?: {
    id: number;
    name: string;
    stock: number;
  };
  total: string;
}

type CartState = {
  totalAmount: number;
  cartItems: CartStateItem[];

  // запрос на получение всех товаров корзины пользователя
  fetchCartItems: () => Promise<void>;

  // запрос на обновление количества товара в корзине
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;

  // запрос на добавление товара в корзину
  addCartItem: (item: CartStateItem) => Promise<void>;

  // запрос на удаление товара из корзине
  removeCartItem: (id: number) => Promise<void>;
};

type CartDrawerProps = CartState & {
  loading: boolean;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useCartDrawer = create<CartDrawerProps>((set) => ({
  loading: true,
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  totalAmount: 0,
  cartItems: [],
  fetchCartItems: async () => {
    try {
      set({ loading: true });
      const data = await Api.cart.getUserCart();
      set(getCartDetails(data));
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
  updateItemQuantity: async () => {},
  addCartItem: async (newItem) => {
    try {
      console.log(newItem);
    } catch (error) {
      console.log(error);
    }
  },
  removeCartItem: async (id: number) => {
    try {
      set({ loading: true });
      const data = await Api.cart.deleteCartItem(id);
      set(getCartDetails(data));
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));

export default useCartDrawer;
