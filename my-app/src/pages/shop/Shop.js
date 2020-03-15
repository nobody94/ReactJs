import React from 'react';
import {Route} from 'react-router-dom';
import Category from '../category/Category';
import Collection from '../collection/Collection';
import './Shop.css';


// class Shop  extends React.Component{ 
//   constructor(props){
//     super(props);  
   
// } 
  
//  render(){ 
//   return (
//     <div className="container">
//      <Route exact path='/shop'><Category></Category></Route>
//      <Route exact path={`/shop/:ShopId`}><Collection></Collection></Route>
//     </div>
//   )
//  };
// }

// export default Shop;


const Shop  = ({ match }) => (
  <div className='container'>
    <Route exact path='/shop'><Category></Category></Route>
    <Route path={`${match.path}/:shopId`} component={Collection}/>
  </div>
);

export default Shop ;