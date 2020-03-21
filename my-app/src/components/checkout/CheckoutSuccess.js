import React from 'react';
import {Link} from 'react-router-dom';
import './CheckoutSuccess.css';
function CheckoutSuccess(props) {
  return (    
    <div className="container">
      <div className="checkout-success">
      <h3>Thank you for shopping with us</h3>
      <p>Your order # is: <strong>{props.location.state.codeOrder}</strong>. <br></br> We'll email you an order confirmation with details and tracking info.</p>
      <Link to="/" className="action go home">Continue shopping</Link>
      </div>    
    </div>
  );
}

export default CheckoutSuccess;
