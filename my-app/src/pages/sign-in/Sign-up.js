import React from 'react';
import Input from '../../components/input/Input';
class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       name:"",
       password:"",
       email:"",
       confirmPassword:""
    };   
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }
  onChangeHandle = (e) =>{  
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )   
  }
  render(){
    return (
      <form className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <p>Sign up with your email and password</p>
        <Input name="name" type="text" value={this.state.name} onChange={this.onChangeHandle} label="Account name" required></Input>
        <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
        <Input name="password" type="password" value={this.state.password} onChange={this.onChangeHandle} label="Password" required></Input>
        <Input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.onChangeHandle} label="Confirm password" required></Input>       
        <div className="btn-actions">
          <button className="action sign-up">Sign up</button>
        </div>
      </form>
    );
  } 
}

export default SignUp;
