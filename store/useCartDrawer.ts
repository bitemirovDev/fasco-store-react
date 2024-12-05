import { create } from 'zustand';

type CartDrawerProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const useCartDrawer = create<CartDrawerProps>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useCartDrawer;
