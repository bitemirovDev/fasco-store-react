import React, { useEffect, useState } from 'react';
import styles from './CartTable.module.scss';
import CartTableBody from '../CartTableBody/CartTableBody';
import CartTableHeader from '../CartTableHeader/CartTableHeader';
import CartTableEmpty from '../CartTableEmpty/CartTableEmpty';
import useCartStore from '@/store/useCartStore';

export default function CartTable() {
  const { items } = useCartStore();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <table className={styles.table}>
      <CartTableHeader />
      {items.length === 0 && <CartTableEmpty />}
      <CartTableBody items={items} />
    </table>
  );
}
