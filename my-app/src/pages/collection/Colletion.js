import React from 'react';
import Item from '../../components/collection/CollectionItem';
import {connect} from 'react-redux';
import {getShop} from '../../redux/shop/shop-selector';
const Collection = ({collection}) =>{
  const { title, items } = collection;
  return (
    <div className="collection-view">
      <h3 className="page-title">{title}</h3>
      
    </div>
  );
}
function mapStateToProps(state){
  return{
    shop : getShop(state)
  }
}
export default connect(mapStateToProps)(Collection);
