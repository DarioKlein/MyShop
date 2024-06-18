export function formatPrice(price: number): string {
  const priceStr = price.toFixed(2)
  const [dollarsPrice, centsPrice] = priceStr.split('.')
  return `${dollarsPrice}.${centsPrice}`
}
