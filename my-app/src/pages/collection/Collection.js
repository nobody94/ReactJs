import React from 'react';
import {connect} from 'react-redux';
import CollectionBlock from '../../components/collection/CollectionComponent';

class Collection extends React.Component {
  constructor(props){
    super(props);  
   
} 
  ListItem(){
    return this.props.data.map((item)=>{
      return(
        <CollectionBlock key={item.id} title={item.title} product={item.items}></CollectionBlock> 
      )
    });
  }  
  render(){     
    return (      
      <div className="collection-view">
      {this.ListItem()}
      </div>
    );
  }
}
// function Collection ({match}){
//  return  <div>
//  <h3>ID: {this.props.data.id}</h3>
// </div>
// }
function mapStateToProps(state){
  return{
    data : state.shopData,
  }    
}
export default connect(mapStateToProps)(Collection);
