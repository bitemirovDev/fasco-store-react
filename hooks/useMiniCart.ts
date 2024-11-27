import { create } from 'zustand';

interface MiniCartProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const useMiniCart = create<MiniCartProps>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export default useMiniCart;
