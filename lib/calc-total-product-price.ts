import { recalcPriceWithDiscount } from "./recalc-cost-discount";

export function calcTotalProductPrice(
  price: number,
  quantity: number,
  discountPercent?: number
) {
  const total = parseFloat(
    (
      (discountPercent
        ? Number(recalcPriceWithDiscount(price, discountPercent))
        : price) * quantity
    ).toFixed(2)
  );

  return total;
}
