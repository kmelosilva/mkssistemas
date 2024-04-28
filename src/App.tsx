
import { GlobalStyle } from './styles/GlobalStyles';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProductList } from './components/ProductsList/ProductList';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <ProductList />
      <Footer/>
      <GlobalStyle />
    </Provider>
  );
}

export default App;
