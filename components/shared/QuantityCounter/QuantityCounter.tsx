"use client";
import styles from "./QuantityCounter.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

type QuantityCounterProps = {
  size: "lg" | "md";
  additionalClassName?: string;
  selectedQuantity?: number;
  onQuantityChange?: (quantity: number) => void;
};

export default function QuantityCounter({
  size,
  additionalClassName,
  selectedQuantity,
  onQuantityChange,
}: QuantityCounterProps) {
  const [count, setCount] = useState<number>(
    selectedQuantity ? selectedQuantity : 1
  );

  const handleButtonClick = (type: "increment" | "decrement") => {
    if (type === "increment") {
      setCount(count + 1);
    } else if (type === "decrement" && count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    onQuantityChange?.(count);
  }, [count]);

  return (
    <div
      className={clsx(
        styles.input,
        additionalClassName,
        size ? styles[`input-${size}`] : ""
      )}
    >
      <button
        className={styles.minus}
        onClick={() => handleButtonClick("decrement")}
      >
        &minus;
      </button>
      <input type="text" value={count} disabled />
      <button
        className={styles.plus}
        onClick={() => handleButtonClick("increment")}
      >
        +
      </button>
    </div>
  );
}
