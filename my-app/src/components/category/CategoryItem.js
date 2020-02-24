import React from 'react';

class CategoryItem extends React.Component {
  constructor(props){
    super(props);  
   
  } 
  render(){
    return (
      <div className="item">
        <div className="image-wrapper">
            <img src={this.props.imageUrl}></img>
            <button className="action add">Add to cart</button>
        </div>
        <div className="content">
          <h4 className="product-name">{this.props.name}</h4>
          <p className="price">{this.props.price}</p>
        </div>
      </div>
    );
  }
}

export default CategoryItem;
