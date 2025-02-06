import styles from "./StockIndicator.module.scss";
import { calcStockIndicatorLineWidth } from "@/lib/calc-stock-indicator-line-width";

type StockIndicatorProps = {
  stock: number;
  maxStock: number;
};

export default function StockIndicator({
  stock,
  maxStock,
}: StockIndicatorProps) {
  const stockIndicatorWidth = calcStockIndicatorLineWidth(stock, maxStock);
  return (
    <div className={styles["stock"]}>
      <p>
        {stock <= 10 && "Only "}
        <span>{stock}</span> item(s) left in stock!
      </p>
      <div className={styles["stock-status"]}>
        <div
          className={styles["stock-status-level"]}
          style={{ width: `${stockIndicatorWidth}%` }}
        ></div>
      </div>
    </div>
  );
}
