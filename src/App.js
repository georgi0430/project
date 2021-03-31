import { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

// import logo from './logo.svg';


import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Offer from './components/Offer/Offer';

import SellOffer from './components/Sell/Sell';
import EditOffer from './components/Offer/EditOffer';
import DeleteOffer from './components/Offer/DeleteOffer';

import Brand from './components/Cars/ByBrand/Brand';

import MyOffers from './components/User/MyOffers'
import Register from './components/Auth/Register/Register';
import Login from './components/Auth/Login/Login';
import Logout from './components/Auth/Logout/Logout';


import Footer from './components/Footer/Footer';
import './App.css';

import * as carService from './services/carService';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: [],
      currentUser: null,
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
          <Route path="/offer/:id" exact component={Offer} />
          <Route path="/offer/:id/edit" exact component={EditOffer} />
          <Route path="/offer/:id/delete" exact component={DeleteOffer} />
          <Route path="/sell" component={SellOffer} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/my-offers" component={MyOffers} />
          <Route path="/cars/:brand" component={Brand} />
          <Route render={() => <h1 >Error Page</h1>} />
        </Switch>
        <Footer />
      </div>
    )
  }

}

export default App;
