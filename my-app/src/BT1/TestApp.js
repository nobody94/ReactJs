import React from 'react';
import './TestApp.css';

function TestApp(props) {
    return (
      <div className="TestApp">  
        <h3 className="title">Practice 1</h3>    
        <div className="user-name">
          Name:{props.user.name}
        </div>
        <div className="email">
         Instagram:{props.user.instagram}
        </div>
        <div className="info">
          {props.user.fullname} is {props.status} and  {props.user.name} love {props.pet}
        </div>       
      </div>
    );
  }
  
export default TestApp;
  