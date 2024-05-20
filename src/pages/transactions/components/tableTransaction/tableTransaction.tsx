import { TransactionContext } from '../../../../context/transactionsContext'
import { SearchForm } from '../searchForm/searchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './tableTransactionStyles'
import { formatPrice } from '../../../../utils/formatPrice'
import { dateFormatter } from '../../../../utils/formatDate'
import { useContextSelector } from 'use-context-selector'

export function TableTransactions() {
  const transactions = useContextSelector(TransactionContext, (context) => {
    return context.transactions
  })

  return (
    <TransactionsContainer>
      <SearchForm />
      <TransactionsTable>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width="40%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '-'}{' '}
                    {formatPrice(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            )
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
