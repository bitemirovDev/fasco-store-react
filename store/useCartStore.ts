import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { updateCartSubtotal } from '@/lib/update-cart-subtotal';
import type { CartItemState, CartStoreProps } from '@/types/cart';

const useCartStore = create<CartStoreProps>()(
  persist(
    (set, get) => {
      const updateSubtotal = (items: CartItemState[]) => ({
        items,
        subtotal: updateCartSubtotal(items),
        loading: false,
      });

      return {
        loading: false,
        isOpen: false,
        cartId: null,
        subtotal: 0,
        items: [],
        open: () => set({ isOpen: true }),
        close: () => set({ isOpen: false }),
        updateItemQuantity: (cartItemId, quantity) => {
          try {
            set((state) => {
              const updatedItems = state.items.map((item) => {
                if (item.id === cartItemId && quantity > 0) {
                  return { ...item, quantity, totalAmount: (item.totalAmount / item.quantity) * quantity };
                }
                return item;
              });

              return updateSubtotal(updatedItems);
            });
          } catch (error) {
            console.log(error);
            throw new Error(error);
          }
        },
        addItem: (item) => {
          try {
            set((state) => {
              const existingItem = state.items.find((i) => i.productId === item.productId && i.size === item.size);

              let updatedItems: CartItemState[];

              if (existingItem) {
                updatedItems = state.items.map((i) =>
                  i.productId === item.productId && i.size === item.size
                    ? {
                        ...i,
                        quantity: i.quantity + item.quantity,
                        totalAmount: (i.quantity + item.quantity) * (i.totalAmount / i.quantity),
                      }
                    : i,
                );
              } else {
                updatedItems = [...state.items, item];
              }

              return updateSubtotal(updatedItems);
            });
          } catch (error) {
            console.log(error);
            throw new Error(error);
          }
        },
        removeItem: (id) => {
          try {
            set((state) => {
              const updatedItems = state.items.filter((item) => item.id !== id);
              return updateSubtotal(updatedItems);
            });
          } catch (error) {
            console.log(error);
            throw new Error(error);
          }
        },
        clearCart: () => {
          return set({ items: [], subtotal: 0 });
        },
      };
    },
    {
      name: 'cart',
      skipHydration: false,
      partialize: (state) => ({
        cartId: state.cartId,
        subtotal: state.subtotal,
        items: state.items,
      }),
    },
  ),
);

export default useCartStore;
