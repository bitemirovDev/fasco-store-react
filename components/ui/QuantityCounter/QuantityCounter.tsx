'use client';
import styles from './QuantityCounter.module.scss';
import { useState } from 'react';

export default function QuantityCounter({ maxQuantity }: { maxQuantity: number }) {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrement = () => {
    if (count >= maxQuantity) return;
    setCount(count + 1);
  };

  return (
    <div className={styles.input}>
      <button className={styles.minus} onClick={handleDecrement}>
        -
      </button>
      <input type="text" value={count} disabled />
      <button className={styles.plus} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
}
