import React from 'react';
import cartIcon from '../../assets/shopping-bag.svg';
import {  Link } from "react-router-dom";
import Item from './Item';
class Minicart extends React.Component {
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
        <div className="minicart">
            <span className="minicart-icon" onClick={this.minicartClick}>
            <img src={cartIcon}></img><span className="minicart-number">0</span>
            </span>
            <div className={isOn}>
            {noItemMsg}
            <Link to="/checkout" className="action">go to Checkout</Link>
            </div> 
        </div> 
      );
     } 
  }
  
  export default Minicart;
  