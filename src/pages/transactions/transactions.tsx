import { Header } from '../../components/header/header'
import { Summary } from '../../components/summary/summary'
import { TableTransactions } from './components/tableTransaction'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TableTransactions />
    </div>
  )
}
