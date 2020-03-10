import React from 'react';
import Input from '../../components/input/Input';
import firebase from '../../firebase/firebaseConfig';
class SignUp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       name:"",
       password:"",
       email:"",
       confirmPassword:"",
       message:false,
       isMatch:false
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

  createUser() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
      if(this.state.confirmPassword !== this.state.password){
        this.setState({
         isMatch:true
        })
      }else{
        this.setState({
          message:true,         
        })
        console.log('message' + this.state.message);
      }   
      this.setState({        
        name:"",
        password:"",
        email:"",
        confirmPassword:"",
      })   
    })
    .catch(function(error) {
       console.log('error'+ error);
    });   
  }
  render(){   
    return (
      <form className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <p>Sign up with your email and password</p>
        <Input name="name" type="text" value={this.state.name} onChange={this.onChangeHandle} label="User name" required></Input>
        <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
        <Input name="password" type="password" value={this.state.password} onChange={this.onChangeHandle} label="Password" required></Input>       
        <Input name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.onChangeHandle} label="Confirm password" required></Input>   
        {this.state.isMatch ? <p className="message">password dont match</p>:null}      
        <div className="btn-actions">
          <button className="action sign-up" onClick={this.createUser()}>Sign up</button>
        </div>      
        {this.state.message ? <p className="message">sign up success</p>:null}  
      </form>
    );
  } 
}

export default SignUp;
