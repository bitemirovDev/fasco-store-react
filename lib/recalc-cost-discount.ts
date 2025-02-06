export function recalcPriceWithDiscount(
  price: number,
  percent: number
): string {
  const discount = parseFloat(((price * percent) / 100).toFixed(2));
  const result = parseFloat((price - discount).toFixed(2)).toFixed(2);

  return result;
}
