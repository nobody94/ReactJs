import React from 'react';
import {connect} from 'react-redux';
import CollectionBlock from '../../components/collection/CollectionComponent';

// class Collection extends React.Component {
//   constructor(props){
//     super(props);  
   
// } 
//   ListItem(){
//     return this.props.data.map((item)=>{
//       return(
//         <CollectionBlock key={item.id} title={item.title} product={item.items}></CollectionBlock> 
//       )
//     });
//   }  
//   render(){     
//     return (      
//       <div className="collection-view">
//       {this.ListItem()}
//       </div>
//     );
//   }
// }
// function mapStateToProps(state){
//   return{
//     data : state.shopData,
//   }    
// }
// export default connect(mapStateToProps)(Collection);


 const Collection = (props,{match}) =>{
  // return props.data.map((item)=>{
  //   if(parseInt(match.params.shopId) === item.id){
  //     return(
  //       <CollectionBlock key={item.id} title={item.title} product={item.items}></CollectionBlock> 
  //     )
  //   }
  //  })
  // const link = props.data.find((cate)=>{
  //   return parseInt(match.params.shopId) === cate.id
  // });
  // console.log(link);
  return(<div></div>);
 }
 function mapStateToProps(state){
    return{
      data : state.shopData,
    }    
  }
 export default connect(mapStateToProps)(Collection);