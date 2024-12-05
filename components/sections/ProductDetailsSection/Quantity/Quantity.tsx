import React from 'react';
import QuantityCounter from '@/components/shared/QuantityCounter/QuantityCounter';
import { Button } from '@/components/ui/Button';
import styles from './Quantity.module.scss';

export default function Quantity() {
  return (
    <div className={styles.quantity}>
      <p className={styles['quantity-title']}>Quantity</p>
      <div className={styles['quantity-container']}>
        <QuantityCounter maxQuantity={10} />
        <div className={styles['quantity-btn']}>
          <Button className="btn--primary btn--wide">Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
