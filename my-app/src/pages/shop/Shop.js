import React from 'react';
import { Route } from 'react-router-dom';
import Category from '../category/Category';
import Collection from '../collection/Colletion';
import './Shop.css';
function Shop(match) {
  return (
    <div className="container">
     <Route><Category></Category></Route>
     {/* <Route><Collection></Collection></Route> */}
    </div>
  );
}

export default Shop;
