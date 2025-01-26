import React from 'react';
import QuantityCounter from '@/components/shared/QuantityCounter/QuantityCounter';
import { Button } from '@/components/ui/Button';
import styles from './Quantity.module.scss';

interface QuantityProps {
  maxQuantity: number;
  onChange?: (quantity: number) => void;
  onAddToCart: () => void;
}

export default function Quantity({ maxQuantity, onChange, onAddToCart }: QuantityProps) {
  return (
    <div className={styles.quantity}>
      <p className={styles['quantity-title']}>Quantity</p>
      <div className={styles['quantity-container']}>
        <QuantityCounter maxQuantity={maxQuantity} onQuantityChange={onChange} size="lg" />
        <div className={styles['quantity-btn']}>
          <Button className="btn--primary btn--wide" onClick={onAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
