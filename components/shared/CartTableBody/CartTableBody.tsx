import React from 'react';
import styles from './CartTableBody.module.scss';
import { CartItemState } from '@/types/cart';

import CartTableRow from '../CartTableRow/CartTableRow';

export default function CartTableBody({ items }: { items: CartItemState[] }) {
  return (
    <tbody className={styles.body}>
      {items.map((item, index) => (
        <CartTableRow key={index} item={item} />
      ))}
    </tbody>
  );
}
