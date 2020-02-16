import React from 'react';
import SignIn from './Sign-in';
import SignUp from './Sign-up';
import './Form.css';
function Form() {
  return (
    <div className="container">
      <div className="form">
        <SignIn></SignIn>
        <SignUp></SignUp>
      </div>      
    </div>
  );
}

export default Form;
