import React from 'react';
import Items from './Items';

function ListItem(props){
    const number = props.number;
    const item = number.map((number) => <Items value={number}/>);
    return(
        <ul>{item}</ul>
    );
}
export default ListItem;