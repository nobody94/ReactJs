import React from 'react';
import SignIn from '../../components/signin/Sign-in';
import SignUp from '../../components/signup/Sign-up';
import './Form.css';


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };   
  } 
 
  render(){
    return (
      <div className="container">
        <div className="form">
          <SignIn></SignIn>
          <SignUp></SignUp>
        </div>      
      </div>
    );
  }
}

export default Form;
