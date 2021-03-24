import { Route, Switch } from 'react-router-dom'

import logo from './logo.svg';


import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Main} exact='true' />
        <Route path="/products" component={Products} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
