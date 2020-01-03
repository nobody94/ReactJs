import React from 'react';
import ListItem from './ListItem';
import Form from './Form';
import Calculator from './Calculator';

function BT3(){
    const numbers = [1,2,3,4,5];
    const double = numbers.map((number) => number * 2);
    console.log("Doubled: ",double);
    const listNumber = numbers.map((number) => <li key={number.toString()}>{number}</li>);
    return(
        <div>
            {/* <ul>{listNumber}</ul>
            <ListItem number={numbers}/>
            <Form /> */}
            <Calculator />
        </div>
    )
}
export default BT3;