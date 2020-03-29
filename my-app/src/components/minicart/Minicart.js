import React from 'react';
import cartIcon from '../../assets/shopping-bag.svg';
import {  Link } from "react-router-dom";
import Item from './MinicartItem';
import {connect} from 'react-redux';
import './Minicart.css';
import {Loading} from '../loading/Loading';
class Minicart extends React.Component {
    constructor(props){
      super(props);
      this.state = {
         minicartIsOn : false,
         loading:false
      }    
      this.minicartClick = this.minicartClick.bind(this);
      this.goCheckout = this.goCheckout.bind(this);
    }
    minicartClick(){
      this.setState({
        minicartIsOn : !this.state.minicartIsOn
      })
    }
    goCheckout(){
      this.setState({
        loading:true
      })
      setTimeout(()=>{
        this.setState({
          loading:false
        })
        this.minicartClick();
        window.location = `/checkout`;  
      },1000)     
    }
    addedItem(){
      const data = this.props.items;   
      // console.log(data);   
      // for(var i =0 ; i< this.props.counter;i++){         
      //   console.log(data[i]);
      // }      
      return data.map((item)=>{
        for(var i =0 ; i< this.props.counter;i++){ 
          return (
            <Item key={item.id} 
          name={item.name} 
          imageUrl={item.imageUrl} 
          price={item.price} 
          quantity={item.quantity}></Item>
          )
        }          
      });  
    }
     render(){        
      let isOn = "minicart-content" + (this.state.minicartIsOn ?  " active" : ""); 
      
      return (
        <div className="minicart">
            <span className="minicart-icon" onClick={this.minicartClick}>
            <img src={cartIcon} alt="minicart"></img><span className="minicart-number">{this.props.counter}</span>
            </span>
            <div className={isOn}>  
              <span className="minicart-close" onClick={this.minicartClick}></span>            
              {
                this.props.counter > 0 
                ? <div className="content">
                    <div className="item-wrapper">
                      {this.addedItem()}
                    </div>
                    <span onClick={this.goCheckout} className="action checkout">go to Checkout</span> 
                  </div> 
                : <p className="message">You had no item in your shopping cart</p>
              }             
            </div> 
            {
                    this.state.loading
                    ? <Loading></Loading>
                    : null
                }
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
  