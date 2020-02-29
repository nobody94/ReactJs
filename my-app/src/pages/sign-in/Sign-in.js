import React from 'react';
import Input from '../../components/input/Input';
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
  }
  onSubmit(){
    
  }
  render(){
    return (
      <form className="sign-in">
        <h2 className="title">I already have an account</h2>
        <p>Sign in with your email and password</p>        
        <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
        <Input name="password" type="password" value={this.state.password} onChange={this.onChangeHandle} label="Password" required></Input>
        <div className="btn-actions">
          <button className="action login" onClick={this.onSubmit}>Sign in</button>
          <button className="action google-login">Sign in with google</button>
        </div>
      </form>
    );
  }  
}

export default SignIn;
