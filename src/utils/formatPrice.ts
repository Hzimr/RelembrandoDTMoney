export function formatPrice(valueInCents: number) {
  const formattedValue = (valueInCents / 100) * 100
  return formattedValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

/* outra possível solução seria
export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
*/
