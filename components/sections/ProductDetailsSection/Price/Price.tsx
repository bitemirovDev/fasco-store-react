import { recalcPriceWithDiscount } from '@/utils/recalc-cost-discount';
import styles from './Price.module.scss';
import { Discount } from '@prisma/client';

type PriceProps = {
  discount?: Discount;
  price: number;
};

export default function Price({ discount, price }: PriceProps) {
  const priceWithDiscount = discount
    ? recalcPriceWithDiscount(price, discount.percent).toFixed(2)
    : '';

  return (
    <div className={styles.price}>
      {discount ? (
        <>
          <span className={styles['price-main']}>${priceWithDiscount}</span>
          <span className={styles['price-wsale']}>${price.toFixed(2)}</span>
          <span className={styles['price-save']}>save {discount.percent}%</span>
        </>
      ) : (
        <span className={styles['price-main']}>${price.toFixed(2)}</span>
      )}
    </div>
  );
}
