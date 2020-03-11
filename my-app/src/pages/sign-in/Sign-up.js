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
    this.createUser = this.createUser.bind(this);
    this.closeBtn = this.closeBtn.bind(this);
  }
  onChangeHandle = (e) =>{  
    this.setState(
      {
        [e.target.name]: e.target.value
      }
    )   
  }

  createUser(e) {
    e.preventDefault();
    if(this.state.confirmPassword !== this.state.password){
      this.setState({
       isMatch:true,
       name:"",
       password:"",
       email:"",
       confirmPassword:"",
      })
    }else{ 
      this.setState({message:true,})     
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(()=>{     
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
    // console.log(this.state);
  }
  closeBtn(){
    this.setState({      
      message:false
    })
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
        {this.state.isMatch ? <p className="message error">Password dont match please try again</p>:null}      
        <div className="btn-actions">
          <button className="action sign-up" onClick={this.createUser}>Sign up</button>
        </div>      
        {
          this.state.message 
          ? <div className="popup success">
              <div className="content">
                <p>Create account success</p>
                <button className="action close" onClick={this.closeBtn}>close</button>
              </div>
            </div>
          :null
        }  
      </form>
    );
  } 
}

export default SignUp;
