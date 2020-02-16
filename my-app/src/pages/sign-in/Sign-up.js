import React from 'react';

function SignUp() {
  return (
    <form className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <p>Sign up with your email and password</p>
      <div className="input-field">        
        <input className="input-text" type="text"></input>
        <span className="label">Account name</span>
      </div>
      <div className="input-field">       
        <input className="input-text" type="email"></input>
        <span className="label">Email</span>
      </div>
      <div className="input-field">      
        <input className="input-text" type="password"></input>
        <span className="label">Password</span>
      </div>
      <div className="input-field">        
        <input className="input-text" type="password"></input>
        <span className="label">Confirm password</span>
      </div>
      <div className="btn-actions">
        <button className="action sign-up">Sign up</button>
      </div>
    </form>
  );
}

export default SignUp;
