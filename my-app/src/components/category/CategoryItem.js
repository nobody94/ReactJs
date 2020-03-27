import React from 'react';
import { connect } from 'react-redux';
import {addToCart} from '../../redux/cart/cart-action';
import {Link} from 'react-router-dom';
class CategoryItem extends React.Component {
  constructor(props){
    super(props);  
    this.state={
      isAddCart:false
    };
   this.addCartHandle = this.addCartHandle.bind(this);
   this.closeBtn = this.closeBtn.bind(this);
  } 
  addCartHandle(){
    this.setState({
      isAddCart:true
    })
    this.props.addToCart(this.props.product);
  }
  closeBtn(){
    this.setState({
      isAddCart:false
    })
  }
  render(){    
    return (
      <div className="item">
        <div className="image-wrapper">
            <img src={this.props.imageUrl}></img>
            {/* <button className="action add" onClick={() => this.props.addToCart(this.props.product)}>Add to cart</button> */}
            <button className="action add" onClick={this.addCartHandle}>Add to cart</button>
        </div>
        <div className="content">
          <h4 className="product-name">{this.props.name}</h4>
          <p className="price">{this.props.price}</p>
        </div>
        {
          this.state.isAddCart 
          ? <div className="popup add-cart">
              <div className="content-popup">
                <p>You been add <strong>{this.props.name}</strong> to cart</p>
                <div className="prd-image">
                <img src={this.props.imageUrl}></img>
                </div>
                <p>Your cart has {this.props.counter} {this.props.counter >= 2 ? 'items' : 'item'}</p>
                <div className="actions">
                  <button className="action close" onClick={this.closeBtn}>Continue Shopping</button>
                  <Link to='/checkout' className="action">Go to checkout</Link> 
                </div>
              </div>
            </div>
          : null
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {     
      addToCart: (item) => {dispatch(addToCart(item))}
  }
};
function mapStateToProps(state){
  return{
    counter:state.cartReducer.counter
  }    
}
export default connect(mapStateToProps,mapDispatchToProps)(CategoryItem);
