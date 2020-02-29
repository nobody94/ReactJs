import React from 'react';
import {connect} from 'react-redux';
import {decrementItem,incrementItem,clearItemFromCart} from '../../redux/cart/cart-action';
class CheckoutItem extends React.Component{
    constructor(props){
        super(props);  
       
    } 
    render(){
        console.log(this.props.quantity);
        return(
            <tr className="item">
                <td className="image">
                    <div className="image-wrapper"><img src={this.props.imageUrl}></img></div>
                </td>
                <td className="name">
                    {this.props.name}
                </td>
                <td className="quantity">
                    <button className="action minus" onClick={() => this.props.decrementItem(this.props.item)}>-</button>
                    <span className="qty">{this.props.quantity}</span>
                    <button className="action plus" onClick={() => this.props.incrementItem(this.props.item)}>+</button>
                </td>
                <td className="price">
                    {this.props.price}
                </td>
                <td className="remove">
                    <button className="action remove" onClick={()=> this.props.clearItemFromCart(this.props.item,this.props.quantity)}>x</button>
                </td>
            </tr>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {     
        incrementItem: (item) => {dispatch(incrementItem(item))},
        decrementItem: (item) => {dispatch(decrementItem(item))},
        clearItemFromCart: (item,quantity) => {dispatch(clearItemFromCart(item,quantity))}
    }
  };
  export default connect(null,mapDispatchToProps)(CheckoutItem);