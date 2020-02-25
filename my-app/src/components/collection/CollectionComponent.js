import React from 'react';
import Item from './CollectionItem';

class CollectionBlock extends React.Component {
    constructor(props){
        super(props);  
       
    } 
    ListItem(){
        return this.props.product.map((item)=>{
            return(
            <Item key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price}></Item> 
            )
        });
    } 
  render(){   
    return (      
        <div className="block-wrapper"> 
            <h3 className="title">{this.props.title}</h3>      
            <div className="item-wrapper">
                {this.ListItem()}
            </div>
        </div>
      );
  }
}

export default CollectionBlock;
