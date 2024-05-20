import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/transactions/transactions'
import { TranasctionsProvider } from './context/transactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TranasctionsProvider>
        <Transactions />
      </TranasctionsProvider>
    </ThemeProvider>
  )
}
