import React from 'react';
import Image from 'next/image';
import useCartDrawer from '@/store/useCartDrawer';

// styles
import styles from './CartDrawerHeader.module.scss';

export default function CartDrawerHeader() {
  const cartDrawer = useCartDrawer();

  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Shopping Cart</h2>
      <p className={styles.desc}>
        Buy <span>$122.35</span> more and get <span>free shipping</span>
      </p>

      <div className={styles.close} onClick={cartDrawer.close}>
        <Image width={16} height={16} src="/img/icons/cancel.svg" alt="cancel button" />
      </div>
    </div>
  );
}
