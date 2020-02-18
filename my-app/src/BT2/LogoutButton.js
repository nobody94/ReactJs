import React from 'react';

function LogoutButton(props){
    return(
        <div className="action-control">
            <button onClick={props.clicked} className="action-btn">Logout</button>
        </div>
    );
}
export default LogoutButton;