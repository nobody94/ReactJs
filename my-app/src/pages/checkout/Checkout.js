import React from 'react';
import {connect} from 'react-redux';
import Item from '../../components/checkout/CheckoutItem';
class Checkout extends React.Component {
  constructor(props){
    super(props);  
   
} 
addedItem(){
  const data = this.props.items;      
  return data.map((item)=>{
    for(var i =0 ; i< this.props.counter;i++){ 
      return <Item key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} quantity={item.quantity} minus={this.decrementItem(item)} plus={this.incrementItem(item)}></Item>
    }          
  });  
}
 render(){
  return (
    <div className="container">
      <div className="checkout-item">
      {this.addedItem()}
      </div>      
    </div>
  );
 }
}
function mapStateToProps(state){
  return{    
    items:state.cartReducer.cartItems
  }    
}
const mapDispatchToProps = dispatch => {
  return {     
      incrementItem: (item) => {dispatch(incrementItem(item))},
      decrementItem: (item) => {dispatch(decrementItem(item))}
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
