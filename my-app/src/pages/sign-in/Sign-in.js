import React from 'react';

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       password:"",
       email:"",
    };   
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }  
  onChangeHandle = (e) =>{  
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
    // console.log(this.state);
  }
  onSubmit(){
    // console.log(this.state);
  }
  render(){
    return (
      <form className="sign-in">
        <h2 className="title">I already have an account</h2>
        <p>Sign in with your email and password</p>
        <div className="input-field">        
          <input className="input-text" type="text" value={this.state.email} name="email" onChange={this.onChangeHandle} ></input>
          <span className="label">Email</span>
        </div>
        <div className="input-field">        
          <input className="input-text" type="text" value={this.state.password} name="password" onChange={this.onChangeHandle}></input>
          <span className="label">Password</span>
        </div>
        <div className="btn-actions">
          <button className="action login" onClick={this.onSubmit}>Sign in</button>
          <button className="action google-login">Sign in with google</button>
        </div>
      </form>
    );
  }  
}

export default SignIn;
