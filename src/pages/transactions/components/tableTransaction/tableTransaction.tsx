import { useEffect, useState } from 'react'
import { SearchForm } from '../searchForm/searchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './tableTransactionStyles'

interface TransactionProps {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export function TableTransactions() {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

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
                    {transaction.price}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            )
          })}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}
