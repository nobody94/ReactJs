import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from './pages/home/Home';
import ContactPage from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import Form from './pages/sign-in/Form';
import Checkout from './pages/checkout/Checkout';
import Header from './components/header/Header';
import Logout from './pages/logout/Logout';
import Error from './pages/error/Error';
import User from './pages/user/User';
import CheckoutSuccess from './components/checkout/CheckoutSuccess';
const App = () =>  { 
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={ContactPage}/>
        <Route path="/shop" component={Shop}/>
        <Route exact path="/sign-in" component={Form}/>
        <Route exact path="/checkout" component={Checkout}/>     
        <Route exact path="/logout" component={Logout}/>
        <Route path='/user' component={User}/>   
        <Route path='/checkout-success' component={CheckoutSuccess}/>          
        <Route component={Error}/>        
      </Switch>
  </Router>
  );
}

export default App;
