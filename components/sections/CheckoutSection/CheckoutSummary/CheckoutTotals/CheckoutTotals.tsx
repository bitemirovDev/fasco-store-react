import styles from './CheckoutTotals.module.scss';

export default function CheckoutTotals() {
  return (
    <div className={styles.totals}>
      <div className={styles.row}>
        <span className={styles['row-title']}>Subtotal</span>
        <span className={styles['row-value']}>$100.00</span>
      </div>
      <div className={styles.row}>
        <span className={styles['row-title']}>Shipping</span>
        <span className={styles['row-value']}>$40.00</span>
      </div>
      <div className={styles.row}>
        <span className={styles['row-title']}>Total</span>
        <span className={styles['row-value']}>$140.00</span>
      </div>
    </div>
  );
}
