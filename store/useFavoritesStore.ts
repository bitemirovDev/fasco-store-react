import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItemState } from '@/types/cart';
import type { IResult } from '@/types/cart';

export interface FavoritesStoreProps {
  items: CartItemState[];
  isAuthenticated: boolean;
  loading: boolean;
  addItemToFavorites: (item: CartItemState) => IResult;
  removeItemFromFavorites: (id: string) => IResult;
  setIsAuthenticated: (value: boolean) => void;
  setFavoritesItems: (items: CartItemState[]) => void;
}

const useFavoritesStore = create<FavoritesStoreProps>()(
  persist(
    (set) => {
      const updateFavorites = (items: CartItemState[]) => ({
        items,
      });
      return {
        isAuthenticated: false,
        loading: false,
        items: [],
        addItemToFavorites: (item) => {
          try {
            set((state) => {
              const existingItem = state.items.some(
                (i) => i.productId === item.productId && i.size.name === item.size.name,
              );

              if (existingItem) {
                return state;
              }

              const updatedItems = [...state.items, item];
              return updateFavorites(updatedItems);
            });

            return { success: 'Item added to favorites' };
          } catch (error) {
            return { error: 'Something went wrong while adding item to favorites' };
          }
        },
        removeItemFromFavorites: (id) => {
          try {
            set((state) => {
              const updatedItems = state.items.filter((item) => item.id !== id);
              return updateFavorites(updatedItems);
            });

            return { success: 'Item removed from favorites' };
          } catch (error) {
            return { error: 'Something went wrong while removing item from favorites' };
          }
        },
        setIsAuthenticated: (value) => set({ isAuthenticated: value }),
        setFavoritesItems: (items) => set({ items }),
      };
    },
    {
      name: 'favorites',
      skipHydration: false,
      partialize: (state) => ({
        items: state.items,
      }),
    },
  ),
);

export default useFavoritesStore;
