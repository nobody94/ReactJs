import React from 'react';
import HOC from './HOC';

const usedHOC = (props) =>{
    return <div>Number : {props.number}</div>
}

const WrappedComponent = HOC(usedHOC);

export default WrappedComponent;