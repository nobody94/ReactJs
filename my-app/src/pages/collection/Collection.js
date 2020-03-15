import React from 'react';
import {connect} from 'react-redux';
import CollectionBlock from '../../components/collection/CollectionComponent';

 const Collection = (props,{match}) =>{
  const shopId =  props.match.params.shopId;
  console.log(shopId);
  const shopItem = props.data.find((item)=>{
    return shopId == item.routeName
  });
  console.log(shopItem);
  const listItem = [shopItem].map((item)=>{
      return(
          <CollectionBlock key={item.id} title={item.title} product={item.items}></CollectionBlock> 
        )
     });
  return(
  <div className="collection-view">
    {listItem}
  </div>
  );
 }
 function mapStateToProps(state){
    return{
      data : state.shopData,
    }    
  }
 export default connect(mapStateToProps)(Collection);