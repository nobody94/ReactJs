import React, {useState,useEffect} from 'react';

function ComponentHook(props) {
    const [newCount,setNewCount] = useState(0);
    useEffect(()=>{
        setNewCount(props.count);
    },[props.count]);
    return(
        <div>
            <p>{newCount}</p>
        </div>
    )
}

export default ComponentHook;