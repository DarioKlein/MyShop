import { Provider } from 'react-redux'
import { Header } from './components/header/Header'
import { ProductsList } from './components/productsList/ProductsList'
import { GlobalStyles } from './styles/GlobalStyles'
import 'bootstrap/dist/css/bootstrap.css'
import { store } from './redux/store'

export function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <ProductsList />
    </Provider>
  )
}
