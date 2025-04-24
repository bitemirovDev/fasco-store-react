'use client';
import styles from './QuantityCounter.module.scss';
import clsx from 'clsx';

type QuantityCounterProps = {
  cartItemId: string;
  size: 'lg' | 'md';
  additionalClassName?: string;
  selectedQuantity?: number;
  onQuantityChange?: (id: string, type: string, quantity: number) => void;
};

export default function QuantityCounter({
  cartItemId,
  size,
  additionalClassName,
  selectedQuantity,
  onQuantityChange,
}: QuantityCounterProps) {
  return (
    <div className={clsx(styles.counter, additionalClassName, size ? styles[`counter-${size}`] : '')}>
      <button
        disabled={selectedQuantity === 1}
        className={styles.minus}
        onClick={() => onQuantityChange(cartItemId, 'decrement', selectedQuantity)}
      >
        &minus;
      </button>
      <input type="text" value={selectedQuantity} disabled />
      <button className={styles.plus} onClick={() => onQuantityChange(cartItemId, 'increment', selectedQuantity)}>
        +
      </button>
    </div>
  );
}
