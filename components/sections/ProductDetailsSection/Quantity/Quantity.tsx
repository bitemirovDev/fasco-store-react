'use client';
import QuantityCounter from '@/components/ui/QuantityCounter/QuantityCounter';
import { Button } from '@/components/ui/Button';
import styles from './Quantity.module.scss';

import useMiniCart from '@/hooks/useMiniCart';

export default function Quantity() {
  const miniCart = useMiniCart();
  return (
    <div className={styles.quantity}>
      <p className={styles['quantity-title']}>Quantity</p>
      <div className={styles['quantity-container']}>
        <QuantityCounter maxQuantity={10} />
        <div className={styles['quantity-btn']}>
          <Button className="btn--primary btn--wide" onClick={miniCart.open}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
