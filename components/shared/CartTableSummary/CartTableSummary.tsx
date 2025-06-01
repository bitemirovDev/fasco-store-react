import React from 'react';
import styles from './CartTableSummary.module.scss';
import useCartStore from '@/store/useCartStore';
import { formatToTwoDecimal } from '@/utils/formatToTwoDecimal';
import Link from 'next/link';
import clsx from 'clsx';

export default function CartTableSummary() {
  const { subtotal, items } = useCartStore();

  return (
    <div className={styles.summary}>
      <div className={styles['summary-container']}>
        <div className={styles['gift-wrap']}>
          <label htmlFor="gift-wrap-checkbox" className={styles['gift-wrap__label']}>
            <input type="checkbox" id="gift-wrap-checkbox" className={styles['gift-wrap__checkbox']} />
            <span className={styles['gift-wrap__checkbox-span']}></span>
            <p>
              For <span>$10.00</span> please wrap the product
            </p>
          </label>
        </div>

        <p className={styles['subtotal']}>
          <span className={styles['subtotal-label']}>Subtotal</span>
          <span className={styles['subtotal-amount']}>${formatToTwoDecimal(subtotal)}</span>
        </p>

        <Link
          href="/checkout"
          className={clsx(
            'btn checkout-button btn--primary btn--wide btn--sm',
            items.length === 0 ? styles['summary-link-disabled'] : '',
          )}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
