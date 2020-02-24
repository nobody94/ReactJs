import React from 'react';
import {connect} from 'react-redux';
import CategoryBlock from '../../components/category/CategoryComponent';

class Category extends React.Component {
  ListItem(){
    return this.props.data.map((item)=>{
      return(
        <CategoryBlock key={item.id} title={item.title} product={item.items}></CategoryBlock> 
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
    data : state.shopData,
  }    
}
export default connect(mapStateToProps)(Category);
