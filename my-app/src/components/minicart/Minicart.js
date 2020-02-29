import React from 'react';
import cartIcon from '../../assets/shopping-bag.svg';
import {  Link } from "react-router-dom";
import Item from './CartItem';
import {connect} from 'react-redux';
import './Minicart.css';
class Minicart extends React.Component {
    constructor(props){
      super(props);
      this.state = {
         minicartIsOn : false,
      }    
      this.minicartClick = this.minicartClick.bind(this);
      // this.addedItem = this.addedItem.bind(this);
    }
    minicartClick(){
      this.setState({
        minicartIsOn : !this.state.minicartIsOn
      })
    }
    addedItem(){
      const data = this.props.items;   
      // console.log(data);   
      // for(var i =0 ; i< this.props.counter;i++){         
      //   console.log(data[i]);
      // }      
      return data.map((item)=>{
        for(var i =0 ; i< this.props.counter;i++){ 
          return <Item key={item.id} 
          name={item.name} 
          imageUrl={item.imageUrl} 
          price={item.price} 
          quantity={item.quantity}></Item>
        }          
      });  
    }
     render(){        
      let isOn = "minicart-content" + (this.state.minicartIsOn ?  " active" : ""); 
      const content = this.props.counter > 0 ? <div className="content"><div className="item-wrapper">{this.addedItem()}</div><Link to="/checkout" className="action checkout">go to Checkout</Link></div> : <p className="message">You had no item in your shopping cart</p>;
      return (
        <div className="minicart">
            <span className="minicart-icon" onClick={this.minicartClick}>
            <img src={cartIcon}></img><span className="minicart-number">{this.props.counter}</span>
            </span>
            <div className={isOn}>              
              {content}              
            </div> 
        </div> 
      );
     } 
  }
  function mapStateToProps(state){
    return{
      counter:state.cartReducer.counter,
      items:state.cartReducer.cartItems
    }    
  }
  export default connect(mapStateToProps)(Minicart);
  