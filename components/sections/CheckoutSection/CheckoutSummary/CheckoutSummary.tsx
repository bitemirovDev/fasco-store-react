'use client';
import styles from './CheckoutSummary.module.scss';
import CheckoutProductItem from '@/components/shared/CheckoutProductItem/CheckoutProductItem';
import DiscountCodeForm from '@/components/shared/DiscountCodeForm/DiscountCodeForm';
import CheckoutTotals from './CheckoutTotals/CheckoutTotals';
import useCartStore from '@/store/useCartStore';

export default function CheckoutSummary() {
  const cart = useCartStore();
  return (
    <div className={styles.summary}>
      <ul className={styles.products}>
        {cart.items.map((item) => (
          <CheckoutProductItem key={item.id} item={item} />
        ))}
      </ul>
      <DiscountCodeForm />
      <CheckoutTotals />
    </div>
  );
}
