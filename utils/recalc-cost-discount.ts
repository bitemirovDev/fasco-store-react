export function recalcPriceWithDiscount(price: number, percent: number) {
  const discount = (price * percent) / 100;
  return price - discount;
}
