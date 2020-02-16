import React from 'react';
import './App.css';
import './assets/css/Header.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Shop from './pages/shop/Shop';
import SignIn from './pages/sign-in/Sign-in';
import logo from './assets/crown.svg';
import cartIcon from './assets/shopping-bag.svg';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       minicartIsOn : false,
    }    
    this.minicartClick = this.minicartClick.bind(this);
  }
  minicartClick(){
    this.setState({
      minicartIsOn : !this.state.minicartIsOn
    })
  }
   render(){       
    const noItemMsg = <p className="message">You had no item in your shopping cart</p>; 
    let isOn = "minicart-content" + (this.state.minicartIsOn ?  " active" : "");    
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
                    <div className="minicart">
                      <span className="minicart-icon" onClick={this.minicartClick}>
                        <img src={cartIcon}></img><span className="minicart-number">0</span>
                      </span>
                      <div className={isOn}>
                        <div className="block-content">
                         {noItemMsg}
                        </div>
                        <Link to="/" className="action">go to Checkout</Link>
                      </div> 
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
}

export default App;
