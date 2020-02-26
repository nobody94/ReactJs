import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../../redux/cart/cart-action';
class CategoryItem extends React.Component {
  constructor(props){
    super(props);  
   
  } 
  render(){    
    return (
      <div className="item">
        <div className="image-wrapper">
            <img src={this.props.imageUrl}></img>
            <button className="action add" onClick={() => this.props.addToCart(this.props.product)}>Add to cart</button>
        </div>
        <div className="content">
          <h4 className="product-name">{this.props.name}</h4>
          <p className="price">{this.props.price}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {     
      addToCart: (item) => {dispatch(addToCart(item))}
  }
};
export default connect(null,mapDispatchToProps)(CategoryItem);
