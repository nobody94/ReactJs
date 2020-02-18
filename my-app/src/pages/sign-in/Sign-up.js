import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       name:"",
       password:"",
       email:"",
    };   
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }
  onChangeHandle = (e) =>{  
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )
    console.log(this.state);
  }
  render(){
    return (
      <form className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <p>Sign up with your email and password</p>
        <div className="input-field">        
          <input className="input-text" type="text" name="name" value={this.state.name} onChange={this.onChangeHandle}></input>
          <span className="label">Account name</span>
        </div>
        <div className="input-field">        
          <input className="input-text" type="text" value={this.state.email} name="email" onChange={this.onChangeHandle} ></input>
          <span className="label">Email</span>
        </div>
        <div className="input-field">        
          <input className="input-text" type="text" value={this.state.password} name="password" onChange={this.onChangeHandle}></input>
          <span className="label">Password</span>
        </div>
        <div className="input-field">        
          <input className="input-text" type="text" value={this.state.password} name="password" onChange={this.onChangeHandle}></input>
          <span className="label">Confirm password</span>
        </div>
        <div className="btn-actions">
          <button className="action sign-up">Sign up</button>
        </div>
      </form>
    );
  } 
}

export default SignUp;
