import React from 'react';
function LoginButton(props){
    return(
        <div className="action-control">
            <button onClick={props.clicked} className="action-btn">Login</button>
        </div>
    );
}
export default LoginButton;