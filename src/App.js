import { Route, Switch } from 'react-router-dom'

import logo from './logo.svg';


import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Products from './components/Products/Products';

import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';

import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Main} exact='true' />
          <Route path="/products" component={Products} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
