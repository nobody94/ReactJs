import React from 'react';
function  Greeting(props){
    const isLoggedIn = props.login;
    console.log("isLoggedIn: ", isLoggedIn);
    if(isLoggedIn){
        return(
            <div className="information">
                <h1 className="title">Hello,{props.name}</h1>
                <h2 className="password">Your password: {props.pass}</h2>
            </div>
        );
    } else {
        return(
            <div className="information">
                <h1 className="title">Please Login</h1>
            </div>
        );
    }
   
}
export default Greeting;