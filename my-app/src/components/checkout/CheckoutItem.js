import React from 'react';
import {connect} from 'react-redux';
import {decrementItem,incrementItem} from '../../redux/cart/cart-action';
class CheckoutItem extends React.Component{
    constructor(props){
        super(props);  
       
    } 
    render(){
        const content = () =>{
            if(this.state.counter > 0){
                return (
                    <div className="item">
                        <div className="block-image">
                            <img src={this.props.imageUrl}></img>
                        </div>
                        <div className="detail">
                        <h4 className="product-name">{this.props.name}</h4>
                        <div className="quantity">
                            <button className="action minus" onClick={this.props.minus}>-</button>
                            {this.props.quantity}
                            <button className="action plus"  onClick={this.props.plus}>+</button>
                        </div>
                        <span className="price">{this.props.price}</span>
                        </div>
                    </div>
                ) 
            } else {
                return (
                    <div className="no-item">
                        <p>You dont have any item in your cart</p>
                        <a className="action back-home" link='/'>Go back home</a>
                    </div>
                )
            }
        };
      
        return(
           {content}
        );
    }
}
function mapStateToProps(state){
    return{
        counter : state.cartReducer.counter,
    }    
}
export default connect(mapStateToProps)(CheckoutItem);