import React from 'react';

function Items(props){
    const value = props.value;
    return(
        <li key={value.toString()}>{value}</li>
    );
}
export default Items;