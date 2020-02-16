import React from 'react';

function SignIn() {
  return (
    <form className="sign-in">
      <h2 className="title">I already have an account</h2>
      <p>Sign in with your email and password</p>
      <div className="input-field">        
        <input className="input-text" type="email"></input>
        <span className="label">Email</span>
      </div>
      <div className="input-field">        
        <input className="input-text" type="password"></input>
        <span className="label">Password</span>
      </div>
      <div className="btn-actions">
        <button className="action login">Sign in</button>
        <button className="action google-login">Sign in with google</button>
      </div>
    </form>
  );
}

export default SignIn;
