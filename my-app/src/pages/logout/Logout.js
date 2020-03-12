import React from 'react';
import {Link} from 'react-router-dom';
function Logout(){
    return(
        <div className="container">
            <p className="message">You been logout</p>
            <Link to="/">Go back home</Link>
            <Link to='/sign-in'>Login</Link>
        </div>
    )
}

export default Logout;