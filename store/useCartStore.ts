import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { updateCartSubtotal } from '@/utils/update-cart-subtotal';
import type { CartItemState, CartStoreProps } from '@/types/cart';

const useCartStore = create<CartStoreProps>()(
  persist(
    (set) => {
      const updateCart = (items: CartItemState[]) => ({
        items,
        subtotal: updateCartSubtotal(items),
        loading: false,
      });
      return {
        isAuthenticated: false,
        loading: false,
        amountForFreeShipping: 200,
        isOpen: false,
        cartId: null,
        subtotal: 0,
        items: [],
        open: () => set({ isOpen: true }),
        close: () => set({ isOpen: false }),
        updateItemQuantity: (cartItemId, type, quantity) => {
          try {
            set((state) => {
              let newQuantity: number = quantity;

              if (type === 'decrement' && quantity > 1) newQuantity -= 1;
              if (type === 'increment') newQuantity += 1;

              const updatedItems = state.items.map((item) => {
                if (item.id === cartItemId && quantity > 0) {
                  return {
                    ...item,
                    quantity: newQuantity,
                    totalAmount: (item.totalAmount / item.quantity) * newQuantity,
                  };
                }
                return item;
              });

              return updateCart(updatedItems);
            });
          } catch (error) {
            console.log(error);
            throw new Error(error);
          }
        },
        addItemToCart: (item) => {
          try {
            set({ loading: true });

            set((state) => {
              const existingItem = state.items.find(
                (i) => i.productId === item.productId && i.size.name === item.size.name,
              );

              let updatedItems: CartItemState[];

              if (existingItem) {
                updatedItems = state.items.map((i) =>
                  i.productId === item.productId && i.size.name === item.size.name
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

              return updateCart(updatedItems);
            });

            return { success: 'Item added to cart' };
          } catch (error) {
            return { error: 'Something went wrong while adding item to cart...' };
          }
        },
        removeItemFromCart: (id) => {
          try {
            set((state) => {
              const updatedItems = state.items.filter((item) => item.id !== id);
              return updateCart(updatedItems);
            });
            return { success: 'Item removed from cart' };
          } catch (error) {
            return { error: 'Something went wrong while removing item from cart...' };
          }
        },
        clearCart: () => set({ items: [], subtotal: 0 }),
        setIsAuthenticated: (value) => set({ isAuthenticated: value }),
        setCartItems: (items) => set({ items }),
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
