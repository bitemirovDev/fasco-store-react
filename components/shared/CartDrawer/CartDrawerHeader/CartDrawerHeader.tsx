import React from 'react';
import Image from 'next/image';
import { formatToTwoDecimal } from '@/utils/formatToTwoDecimal';

// styles
import styles from './CartDrawerHeader.module.scss';
import useCartStore from '@/store/useCartStore';

interface CartDrawerHeaderProps {
  isEmpty: boolean;
  onClose: () => void;
}

export default function CartDrawerHeader({ onClose, isEmpty }: CartDrawerHeaderProps) {
  const amountForFreeShipping = useCartStore((state) => {
    const minForFree = 200;
    return state.subtotal >= minForFree ? 0 : minForFree - state.subtotal;
  });

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Shopping Cart</h2>
      {isEmpty && amountForFreeShipping !== 0 ? (
        <p className={styles.desc}>
          Buy <span>${formatToTwoDecimal(amountForFreeShipping)}</span> more and get <span>free shipping</span>
        </p>
      ) : (
        <p className={styles.desc}>
          Delivery will be <span>free</span>
        </p>
      )}

      <div className={styles.close} onClick={onClose}>
        <Image width={16} height={16} src="/img/icons/cancel.svg" alt="cancel button" />
      </div>
    </div>
  );
}
