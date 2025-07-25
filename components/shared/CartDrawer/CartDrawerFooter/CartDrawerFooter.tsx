import React from 'react';
import { Button } from '@/components/ui';
import { formatToTwoDecimal } from '@/utils/formatToTwoDecimal';

// styles
import styles from './CartDrawerFooter.module.scss';

export default function CartDrawerFooter({ total }: { total: number }) {
  return (
    <div className={styles.footer}>
      <div className={styles['footer-total']}>
        <p>Subtotal</p>
        <span>$ {formatToTwoDecimal(total)}</span>
      </div>
      <div className={styles['footer-btn']}>
        <Button disabled={total === 0} className="btn--md btn--primary btn--wide">
          Checkout
        </Button>
      </div>
      <a className={styles['footer-link']} href="/cart">
        View Cart
      </a>
    </div>
  );
}
