import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Counter from './components/Counter';
import AddItem from './components/AddItem';
import ShoppingList from './components/ShoppingList';

function App() {
  return (
    <Provider store={store}>
      <div>Redux toolkit</div>
      <Counter />
      <hr />
      <h2>Shopping Cart</h2>
      <AddItem />
      <ShoppingList />
    </Provider>
  );
}

export default App;
