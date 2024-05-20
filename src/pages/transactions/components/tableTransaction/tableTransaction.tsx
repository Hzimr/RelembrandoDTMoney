import { useContext } from 'react'
import { TransactionContext } from '../../../../context/transactionsContext'
import { SearchForm } from '../searchForm/searchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './tableTransactionStyles'
import { formatPrice } from '../../../../utils/formatPrice'
import { dateFormatter } from '../../../../utils/formatDate'

export function TableTransactions() {
  const { transactions } = useContext(TransactionContext)

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
