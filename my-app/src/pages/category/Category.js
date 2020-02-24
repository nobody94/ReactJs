import React from 'react';
import {connect} from 'react-redux';
import {getShop} from '../../redux/shop/shop-selector';
import CategoryBlock from '../../components/category/CategoryComponent';

class Category extends React.Component {
  ListItem(){
    return this.props.data.map((item)=>{
      return(
        <CategoryBlock key={item.id} title={item.title}></CategoryBlock> 
      )
    });
  }
  render(){
    return (
      <div className="category-view">
      {this.ListItem()}
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    data : getShop(state),
  }    
}
export default connect(mapStateToProps)(Category);
