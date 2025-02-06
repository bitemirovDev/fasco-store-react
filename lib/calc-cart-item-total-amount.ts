import { CartItemDTO } from "@/services/dto/cart.dto";
import { recalcPriceWithDiscount } from "./recalc-cost-discount";

export function calcCartItemTotalAmount(item: CartItemDTO): number {
  const discount = item.product.discount;

  if (!discount) {
    return item.product.price * item.quantity;
  }

  return (
    Number(
      recalcPriceWithDiscount(item.product.price, item.product.discount.percent)
    ) * item.quantity
  );
}
