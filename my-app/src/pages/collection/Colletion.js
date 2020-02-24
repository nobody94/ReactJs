import React from 'react';
import Item from '../../components/collection/CollectionItem';
import {connect} from 'react-redux';
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
    shop :state.shopData
  }
}
export default connect(mapStateToProps)(Collection);
