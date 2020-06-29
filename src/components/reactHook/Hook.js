import React, {useState} from 'react';
import ComponentHook from './ComponentHook';

function Hook(){
    const [count,setCount] = useState(0);
    const plus = () => {
        setCount(count + 1)
    };
    const minus = () => {
        setCount(count > 0 ? count - 1 : count)
    }
    return(
        <div>
            <button onClick={()=>minus()} style={{cursor:'pointer'}}>-</button>
            <span style={{display:'inline-block',margin:'0 10px'}}>{count}</span>
            <button onClick={()=>plus()} style={{cursor:'pointer'}}>+</button>
            <ComponentHook count={count}/>
        </div>
    )
}

export default Hook;