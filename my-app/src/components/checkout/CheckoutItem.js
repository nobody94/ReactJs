import React from 'react';
import {connect} from 'react-redux';
import {decrementItem,incrementItem} from '../../redux/cart/cart-action';
class CheckoutItem extends React.Component{
    constructor(props){
        super(props);  
       
    } 
    render(){
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
                    {this.props.quantity}
                    <button className="action plus" onClick={() => this.props.incrementItem(this.props.item)}>+</button>
                </td>
                <td className="price">
                    {this.props.price}
                </td>
                <td className="remove"></td>
            </tr>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {     
        incrementItem: (item) => {dispatch(incrementItem(item))},
        decrementItem: (item) => {dispatch(decrementItem(item))}
    }
  };
  export default connect(null,mapDispatchToProps)(CheckoutItem);