import React from 'react';
import Item from './CategoryItem';

function CategoryBlock() {
  return (      
    <div className="category-block"> 
        <h3>{this.props.title}</h3>      
        <Item></Item>
    </div>
  );
}

export default CategoryBlock;
