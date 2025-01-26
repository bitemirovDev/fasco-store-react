'use client';
import styles from './QuantityCounter.module.scss';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

type QuantityCounterProps = {
  maxQuantity: number;
  size: 'lg' | 'md';
  onQuantityChange?: (quantity: number) => void;
};

export default function QuantityCounter({
  maxQuantity,
  size,
  onQuantityChange,
}: QuantityCounterProps) {
  const [count, setCount] = useState<number>(1);

  const handleButtonClick = (type: 'increment' | 'decrement') => {
    if (type === 'increment' && count < maxQuantity) {
      setCount(count + 1);
    } else if (type === 'decrement' && count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    onQuantityChange?.(count);
  }, [count]);

  return (
    <div className={clsx(styles.input, size ? styles[`input-${size}`] : '')}>
      <button className={styles.minus} onClick={() => handleButtonClick('decrement')}>
        &minus;
      </button>
      <input type="text" value={count} disabled />
      <button className={styles.plus} onClick={() => handleButtonClick('increment')}>
        +
      </button>
    </div>
  );
}
