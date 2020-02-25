import React from 'react';
import {Route} from 'react-router-dom';
import Category from '../category/Category';
import Collection from '../collection/Collection';
import './Shop.css';
import {connect} from 'react-redux';

class Shop  extends React.Component{ 
  constructor(props){
    super(props);  
   
} 
  
 render(){    
  return (
    <div className="container">
     <Route exact path='/shop'><Category></Category></Route>
     <Route exact path={`/shop/:shopId`}><Collection></Collection></Route>
    </div>
  )
 };
}
function mapStateToProps(state){
  return{
    data : state.shopData,
  }    
}
export default connect(mapStateToProps)(Shop);


// const Shop  = ({ match }) => (
//   <div className='container'>
//     <Route exact path='/shop'><Category></Category></Route>
//     <Route path={`/shop/:shopId`}><Collection></Collection></Route>
//   </div>
// );

// export default Shop ;