import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import SignIn from './pages/sign-in/Sign-in';
import logo from './assets/crown.svg';
import cartIcon from './assets/shopping-bag.svg';

function App() {
  const noItemMsg = "You had no item in your shopping cart";  
   
  return (
    <Router>
    <div className="project">
        <header className="header">
          <div className="container">
            <Link to="/" className="logo"><img src={logo}></img></Link>
            <nav className="nav-section">
              <ul className="navigation">          
                <li><Link to="/shop">Shop</Link></li>   
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/sign-in">Sign in</Link></li> 
                <li>
                  <span className="minicart">
                    <img src={cartIcon}></img><span className="minicart-number">0</span>
                  </span>     
                  <div className="minicart-content">
                    <div className="block-content">
                      <p className="message">{noItemMsg}</p>
                    </div>
                    <Link to="/" className="action">go to Checkout</Link>
                  </div> 
                </li>  
              </ul>
            </nav>
          </div>         
        </header>
       
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
         <SignIn></SignIn>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
