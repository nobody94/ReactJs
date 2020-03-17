import React from 'react';
import { Link } from "react-router-dom";
import Minicart from '../minicart/Minicart';
import logo from '../../assets/crown.svg';
import './Header.css';

import Navigation from '../navigation/Navigation';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          isMobile:false,
          mobileNav:false
        }; 
        
    }
    render(){
        return (
            <header className="header">
                <div className="container">
                  {
                    this.state.isMobile
                    ? <span className="nav-mobile"><span></span><span></span><span></span></span>
                    : null
                  }
                  <div className="logo">
                    <Link to="/"><img src={logo} alt="logo"></img></Link>
                  </div>
                  <div className="header-content">
                    <Navigation mobileNav={this.state.mobileNav}></Navigation>
                    <Minicart></Minicart>
                  </div>
                </div> 
          </header>          
        );
    }
  }
 
  export default Header;
  