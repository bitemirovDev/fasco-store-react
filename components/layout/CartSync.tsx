'use client';
import { useEffect } from 'react';
import useCartStore from '@/store/useCartStore';

export default function CartSync() {
  const { items, setCartItems } = useCartStore();

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cart') {
        try {
          const stored = e.newValue ? JSON.parse(e.newValue) : null;
          const parsed = stored?.state;

          // 🛡️ Защита: сравнение текущего состояния и нового
          if (parsed && JSON.stringify(parsed.items) !== JSON.stringify(items)) {
            setCartItems(parsed.items);
          }
        } catch (error) {
          console.warn('CartSync error:', error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [items, setCartItems]);

  return null;
}
