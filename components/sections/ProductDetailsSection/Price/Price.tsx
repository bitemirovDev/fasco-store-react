import React from 'react';
import { formatToTwoDecimal } from '@/utils/formatToTwoDecimal';

//  styles
import styles from './Price.module.scss';

type PriceProps = {
  price: number;
  priceWithDiscount?: number;
  discountPercent?: number;
};

export default function Price({ priceWithDiscount, discountPercent, price }: PriceProps) {
  return (
    <div className={styles.price}>
      {priceWithDiscount ? (
        <>
          <span className={styles['price-main']}>${formatToTwoDecimal(priceWithDiscount)}</span>
          <span className={styles['price-wsale']}>${formatToTwoDecimal(price)}</span>
          <span className={styles['price-save']}>save {discountPercent}%</span>
        </>
      ) : (
        <span className={styles['price-main']}>${formatToTwoDecimal(price)}</span>
      )}
    </div>
  );
}
