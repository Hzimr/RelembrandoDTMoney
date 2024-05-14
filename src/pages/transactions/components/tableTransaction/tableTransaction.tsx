import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './tableTransactionStyles'

export function TableTransactions() {
  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>
          <tr>
            <td width="40%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>13/04/2022</td>
          </tr>
          <tr>
            <td width="40%">Combo Burger King</td>
            <td>
              <PriceHighlight variant="outcome">-R$ 120,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/04/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
