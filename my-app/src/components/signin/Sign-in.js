import React from 'react';
import Input from '../input/Input';
import firebase from '../../firebase/firebaseConfig';
class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       password:"",
       email:"",
       notEmail:false,
       emailNotExist:false,
       wrongPassword:false
    };   
    this.onChangeHandle = this.onChangeHandle.bind(this);
    this.loginAccount = this.loginAccount.bind(this);
  }  
  onChangeHandle = (e) =>{  
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )    
  }
  loginAccount(e){
    e.preventDefault();
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const test = pattern.test(this.state.email);
    if(test){
      this.setState({
        notEmail:false,
        password:"",
        email:"",
      });
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{
        
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
          // this.setState({wrongPassword:true})
        } else if(errorCode === "auth/user-not-found"){
          alert('User not found.');
          // alert(errorMessage);
          // this.setState({wrongPassword:false})
        }
        console.log(error);
        // this.setState({
        //   emailNotExist:true
        // })
      }); 
    }else{
      this.setState({notEmail:true})
    }
  }
  render(){
    return (
      <form className="sign-in">
        <h2 className="title">I already have an account</h2>
        <p>Sign in with your email and password</p>        
        <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
        {this.state.notEmail ? <p className="message error">The email address must be in xxx@yyy.zzz format. Please try again</p> : null}
        {this.state.emailNotExist ? <p className="message error">Can not found this account. Please create one or try again</p>:null}        
        <Input name="password" type="password" value={this.state.password} onChange={this.onChangeHandle} label="Password" required></Input>
        {this.state.wrongPassword ? <p className="message error">Wrong password. Please try again</p>:null}
        <div className="btn-actions">
          <button className="action login" onClick={(e)=>this.loginAccount(e)}>Sign in</button>
          <button className="action google-login">Sign in with google</button>
        </div>
      </form>
    );
  }  
}

export default SignIn;
