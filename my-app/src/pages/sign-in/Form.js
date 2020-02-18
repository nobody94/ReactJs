import React from 'react';
import SignIn from './Sign-in';
import SignUp from './Sign-up';
import './Form.css';


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };   
  }
  checkValidity(value,rules){
    let isValid = true;
    if(!rules){
        return true;
    }
    if(rules.required){
        isValid = value.trim() !== '' && isValid;
    }
    if(rules.minLength){
        isValid = value.length >=rules.minLength && isValid
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }
    if(rules.isEmail){
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }
    if(rules.isNumeric){
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }
    return isValid;
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
