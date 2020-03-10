import React from 'react';
import Input from '../input/Input';
import {Link} from 'react-router-dom';

class CheckoutPayment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address:"",
            email:"",
        }; 
        this.onChangeHandle = this.onChangeHandle.bind(this); 
    }
    onChangeHandle = (e) =>{  
        this.setState(
          {
            [e.target.name]: e.target.value
          }
        )   
      }
    render(){       
        return(
            <div className="checkout-payment">
                <div className="content">
                    <h4 className="title">Information</h4>
                    <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
                    <Input name="address" type="text" value={this.state.address} onChange={this.onChangeHandle} label="Address" required></Input>
                </div>
                <div className="content">
                    <h4 className="title">Payment method</h4>                    
                    <Input type="radio" name="payment" value="" label="Cash on delivery" for="cash" id="cash" checked></Input>
                    <Input type="radio" name="payment" value="" label="Checkout with Paypal" disabled for="paypal" id="paypal"></Input>
                    <Input type="radio" name="payment" value="" label="Other" for="other" id="other" disabled></Input>                                
                </div>
                <div className="btn-actions">
                    <button className="action buy">Buy now</button>
                </div> 
            </div>
        )
    }
}

 export default CheckoutPayment;