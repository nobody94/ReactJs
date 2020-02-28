import React from 'react';
import {connect} from 'react-redux';
import Item from '../../components/checkout/CheckoutItem';
import {decrementItem,incrementItem} from '../../redux/cart/cart-action';
import './Checkout.css';
class Checkout extends React.Component {
  constructor(props){
    super(props);  
   
} 
addedItem(){
  const data = this.props.items;      
  return data.map((item)=>{
    for(var i =0 ; i< this.props.counter;i++){ 
      return <Item key={item.id} name={item.name} 
      imageUrl={item.imageUrl} price={item.price} 
      /*quantity={item.quantity}*/
       minus={this.props.decrementItem(item)} 
       plus={this.props.incrementItem(item)}>         
       </Item>
    }          
  });  
}
 render(){
   let content = this.props.counter > 0 
   ? this.addedItem()
   : <div className="no-item"><p>Your cart is empty</p><a className="action go-home" href="/">Go back home</a></div> 
  return (
    <div className="container">
      <div className="checkout-item">
      {content}
      </div>      
    </div>
  );
 }
}
function mapStateToProps(state){
  return{    
    items:state.cartReducer.cartItems,
    counter:state.cartReducer.counter
  }    
}
const mapDispatchToProps = dispatch => {
  return {     
      incrementItem: (item) => {dispatch(incrementItem(item))},
      decrementItem: (item) => {dispatch(decrementItem(item))}
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
