export function calcStockIndicatorLineWidth(stock: number, maxStock: number) {
  return Math.max(0, Math.min((stock / maxStock) * 100, 100));
}
