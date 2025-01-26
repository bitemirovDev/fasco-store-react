import { Discount } from '@prisma/client';
import { recalcPriceWithDiscount } from './recalc-cost-discount';

export function calcTotalProductPrice(price: number, quantity: number, discount?: Discount) {
  const total = parseFloat(
    ((discount ? recalcPriceWithDiscount(price, discount.percent) : price) * quantity).toFixed(2),
  );

  return total;
}
