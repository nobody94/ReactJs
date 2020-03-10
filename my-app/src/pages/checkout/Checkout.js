import React from 'react';
import {connect} from 'react-redux';
import Item from '../../components/checkout/CheckoutItem';
import Payment from '../../components/checkout/CheckoutPayment';
import {Link} from 'react-router-dom';
import './Checkout.css';
class Checkout extends React.Component {
  constructor(props){
    super(props);  
   
} 
addedItem(){
  const data = this.props.items; 
  // for(var i =0 ; i< this.props.counter;i++){         
  //     console.log(data[i]);
  //     console.log(data[i].quantity);
  // }  
    return data.map((item)=>{      
      for(var i =0 ; i< this.props.counter;i++){         
        return <Item key={item.key} name={item.name} imageUrl={item.imageUrl} price={item.price} quantity={item.quantity} item={item}></Item>
      }  
    });
}
 render(){ 
  return (
    <div className="container">
      <div className="checkout-item">
      {
        this.props.counter > 0 
        ?  <div className="with-item">
          <table>
            <thead>
              <tr>
                <th className="image">Product image</th>  
                <th className="name">Product name</th>  
                <th className="quantity">Quantity</th>  
                <th className="price">Price</th>  
                <th className="remove">Remove</th>  
              </tr>
            </thead> 
            <tbody>
            {this.addedItem()}
            </tbody>
          </table> 
          <Payment></Payment>
        </div>
         : <div className="no-item"><p>Your cart is empty</p><Link className="action go-home" to="/">Continue shopping</Link></div> 
      }
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

export default connect(mapStateToProps)(Checkout);
