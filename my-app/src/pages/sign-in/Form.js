import React from 'react';
import SignIn from './Sign-in';
import SignUp from './Sign-up';
import './Form.css';
import axios from '../../axios-oreder';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    };   
  } 
  componentDidMount(){
    axios.get('/contact')
    .then(res=>{
      console.log('user' + res.data);
    })
    // .catch(error => {
    //   console.log("sign up", error);
    //   this.setState({error: true});
    // });
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
