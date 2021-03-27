import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// import logo from './logo.svg';


import Header from './components/Header/Header';
import Main from './components/Main/Main';
// import Products from './components/Products/Products';

// import Register from './components/Auth/Register/Register';
// import Login from './components/Auth/Login/Login';

import Footer from './components/Footer/Footer';
import './App.css';

import * as carService from './services/carService';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    }
  }

  componentDidMount() {
    let cars = [];
    carService.getAll()
      .then(res => {
        res.forEach(doc => {
          const data = {};
          const id = doc.id
          Object.assign(data, { id })
          Object.assign(data, doc.data())
          cars.push(data)
        })
        this.setState({ cars })
      })
  }

  getCars() {
    return this.state.cars;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main cars={this.getCars()} />
          </Route>
          {/* <Route path="/products" component={Products} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} /> */}
          <Route render={() => <h1 >Error Page</h1>} />
        </Switch>
        <Footer />
      </div>
    )
  }

}

export default App;
