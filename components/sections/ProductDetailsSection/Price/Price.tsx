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
  const formattedPrice = formatToTwoDecimal(price);
  const formattedPriceWithDiscount = formatToTwoDecimal(priceWithDiscount ?? price);

  return (
    <div className={styles.price}>
      {priceWithDiscount && discountPercent ? (
        <>
          <span className={styles['price-main']}>${formattedPriceWithDiscount}</span>
          <span className={styles['price-wsale']}>${formattedPrice}</span>
          <span className={styles['price-save']}>save {discountPercent}%</span>
        </>
      ) : (
        <span className={styles['price-main']}>${formattedPriceWithDiscount}</span>
      )}
    </div>
  );
}
