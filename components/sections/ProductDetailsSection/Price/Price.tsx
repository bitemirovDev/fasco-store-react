"use client";
import React, { useEffect, useState } from "react";
import { recalcPriceWithDiscount } from "@/lib/recalc-cost-discount";
import { ProductDiscount } from "@prisma/client";
import { formatToTwoDecimal } from "@/utils/formatToTwoDecimal";

//  styles
import styles from "./Price.module.scss";

type PriceProps = {
  discount?: ProductDiscount;
  price: number;
};

export default function Price({ discount, price }: PriceProps) {
  const [priceWithDiscount, setPriceWithDiscount] = useState<string>(
    String(price)
  );

  useEffect(() => {
    if (discount) {
      const calculatedPrice = recalcPriceWithDiscount(price, discount.percent);
      setPriceWithDiscount(calculatedPrice);
    }
  }, []);

  return (
    <div className={styles.price}>
      {discount ? (
        <>
          <span className={styles["price-main"]}>${priceWithDiscount}</span>
          <span className={styles["price-wsale"]}>
            ${formatToTwoDecimal(price)}
          </span>
          <span className={styles["price-save"]}>save {discount.percent}%</span>
        </>
      ) : (
        <span className={styles["price-main"]}>
          ${formatToTwoDecimal(price)}
        </span>
      )}
    </div>
  );
}
