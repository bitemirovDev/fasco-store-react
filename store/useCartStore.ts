import { getCartDetails } from '@/lib';
import { Api } from '@/services/api-client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItemState {
  id: number;
  quantity: number;
  img: string;
  title: string;
  size: string;
  totalAmount: number;
}

type CartState = {
  cartId: number | null;
  totalAmount: number;
  items: CartItemState[];
  getItems: () => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => void;
  addItem: (item: CartItemState) => void;
  removeItem: (id: number) => void;
};

type CartDrawerProps = CartState & {
  loading: boolean;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useCartStore = create<CartDrawerProps>()(
  persist(
    (set, get) => ({
      loading: false,
      isOpen: false,
      cartId: null,
      totalAmount: 0,
      items: [],
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      getItems: async () => {
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
      updateItemQuantity: (id: number, quantity: number) => {
        try {
          set({ loading: true });
          set((state) => {
            const updatedItems = state.items.map((item) => {
              if (item.id === id && quantity > 0) {
                return { ...item, quantity };
              }
              return item;
            });

            return {
              items: updatedItems,
            };
          });
        } catch (error) {
          console.log(error);
        } finally {
          set({ loading: false });
        }
      },
      addItem: (item) => {
        console.log(item);
      },
      removeItem: (id: number) => {
        console.log(id);
      },
    }),
    {
      name: 'cart',
      skipHydration: true,
    },
  ),
);

export default useCartStore;
