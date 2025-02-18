import styles from "./QuantityCounter.module.scss";
import clsx from "clsx";

type QuantityCounterProps = {
  cartItemId: number;
  size: "lg" | "md";
  additionalClassName?: string;
  selectedQuantity?: number;
  onQuantityChange?: (id: number, type: string, quantity: number) => void;
};

export default function QuantityCounter({
  cartItemId,
  size,
  additionalClassName,
  selectedQuantity,
  onQuantityChange,
}: QuantityCounterProps) {
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
        onClick={() =>
          onQuantityChange(cartItemId, "decrement", selectedQuantity)
        }
      >
        &minus;
      </button>
      <input type="text" value={selectedQuantity} disabled />
      <button
        className={styles.plus}
        onClick={() =>
          onQuantityChange(cartItemId, "increment", selectedQuantity)
        }
      >
        +
      </button>
    </div>
  );
}
