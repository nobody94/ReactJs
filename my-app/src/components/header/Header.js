import React from 'react';
import { Link } from "react-router-dom";
import Minicart from '../minicart/Minicart';
import logo from '../../assets/crown.svg';
import './Header.css';
import MediaQuery from 'react-responsive';
import Navigation from '../navigation/Navigation';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {          
          mobileNav:false
        }; 
        this.navMobileHandle = this.navMobileHandle.bind(this);
    }
  
    navMobileHandle(){
      this.setState({
        mobileNav: !this.state.mobileNav
      })
    }
    componentWillMount(){
      this.setState({
        mobileNav: false
      })
    }
    render(){
      const isOn = this.state.mobileNav ? 'active' : '';
        return (
            <header className="header">
                <div className="container">
                <MediaQuery maxDeviceWidth={767}>
                  <span className={`nav-mobile ${isOn}`} onClick={this.navMobileHandle}><span></span><span></span><span></span></span>
                </MediaQuery>
                  <div className="logo">
                    <Link to="/"><img src={logo} alt="logo"></img></Link>
                  </div>
                  <div className="header-content">
                    <Navigation mobileNav={this.state.mobileNav} closeBtn={this.navMobileHandle}></Navigation>
                    <Minicart></Minicart>
                  </div>
                </div> 
          </header>          
        );
    }
  }
 
  export default Header;
  