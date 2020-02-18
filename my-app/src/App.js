import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import Form from './pages/sign-in/Form';
import Checkout from './pages/checkout/Checkout';
import Header from './components/header/Header';


class App extends React.Component {
  constructor(props){
    super(props);  

  } 
   render(){
    return (
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/sign-in">
           <Form></Form>
          </Route>
          <Route path="/checkout">
           <Checkout></Checkout>
          </Route>
        </Switch>
    </Router>
    );
   } 
}

export default App;
