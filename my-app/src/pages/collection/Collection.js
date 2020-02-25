import React from 'react';
import {Link} from 'react-router-dom';
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
function mapStateToProps(state){
  return{
    data : state.shopData,
  }    
}
export default connect(mapStateToProps)(Collection);


// const Collection = ({match,location}) =>{
//   // const { params: { shopId } } = match;
//   return(
//     <div>
//      <p>
//         <strong>Match Props: </strong>
//         <code>{JSON.stringify(match, null, 2)}</code>
//       </p>
//       <p>
//         <strong>Location Props: </strong>
//         <code>{JSON.stringify(location, null, 2)}</code>
//       </p>
//     </div>
//   );
// }

// export default Collection;