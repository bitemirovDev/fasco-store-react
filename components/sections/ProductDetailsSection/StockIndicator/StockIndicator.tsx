import styles from './StockIndicator.module.scss';

type StockIndicatorProps = {
  stock: number;
  maxStock: number;
};

export default function StockIndicator({ stock, maxStock }: StockIndicatorProps) {
  const stockLevelWidth = Math.max(0, Math.min((stock / maxStock) * 100, 100));
  return (
    <div className={styles['stock']}>
      <p>
        {stock <= 30 && 'Only '}
        <span>{stock}</span> item(s) left in stock!
      </p>
      <div className={styles['stock-status']}>
        <div
          className={styles['stock-status-level']}
          style={{ width: `${stockLevelWidth}%` }}></div>
      </div>
    </div>
  );
}
