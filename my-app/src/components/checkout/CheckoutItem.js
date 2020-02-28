import React from 'react';

class CheckoutItem extends React.Component{
    constructor(props){
        super(props);  
       
    } 
    render(){
        return(
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
        );
    }
}

export default CheckoutItem;