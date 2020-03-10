import React from 'react';
import Input from '../../components/input/Input';
import './Contact.css';
import firebase from '../../firebase/firebaseConfig';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {      
       email:"",
       name:"",
       message:"",
       success:false
    }; 
    this.sendMessage = this.sendMessage.bind(this);
    this.closeBtn = this.closeBtn.bind(this);
  }  
  onChangeHandle = (event) =>{     
    this.setState(
      {       
        ...this.state, 
        [event.target.name]: event.target.value        
      }
    )  
    console.log(this.state);  
  }

  sendMessage(){ 
    const data = {
      name:this.state.name,
      email:this.state.email,
      message:this.state.message
    }
    firebase.database().ref().child('contact/').push(data);  
    this.setState({ 
      email:"",
      name:"",
      message:"",
      success:true
    })
    // console.log(this.state); 
  }
  closeBtn(){
    this.setState({      
      success:false
    })
  }
  render(){
    const isSuccess =  this.state.success 
    ? <div className="popup success">
        <div className="content">
          <p>Sending message success</p>
          <button className="action close" onClick={this.closeBtn}>close</button>
        </div>
      </div>
    : null;
    return (
      <div className="container">
        <div className="contact-page">
          <div className="contact-message">
            <h2>Send a message</h2>
            <Input name="name" type="text" value={this.state.name} onChange={this.onChangeHandle} label="Name" required></Input>
            <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
            <textarea name="message" value={this.state.message} onChange={this.onChangeHandle} placeholder="Your Message" rows="7"></textarea>
            <div className="btn-actions">
              <button className="action submit" onClick={this.sendMessage}>Send message</button>
            </div>
            {isSuccess}                 
          </div>
          <div className="contact-info">
            <h2>Our Info</h2>
            <ul className="info">
              <li><strong>Add:</strong> 301 The Greenhouse London, E2 8DY UK</li>
              <li><strong>Mail:</strong> support@domain.com</li>
              <li><strong>Phone:</strong> 820-885-3321</li>
            </ul>
          </div>        
        </div>
      </div>
    );
  }
}

export default Contact;
