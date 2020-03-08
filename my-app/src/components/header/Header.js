import React from 'react';
import { Link } from "react-router-dom";
import Minicart from '../minicart/Minicart';
import logo from '../../assets/crown.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
            <Link to="/" className="logo"><img src={logo} alt="logo"></img></Link>
            <nav className="nav-section">
                <ul className="navigation">          
                <li><Link to="/shop">Shop</Link></li>   
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/sign-in">Sign in</Link></li> 
                <li>
                    <Minicart></Minicart>
                </li>  
                </ul>
            </nav>
            </div>         
      </header>
    );
  }
  
  export default Header;
  