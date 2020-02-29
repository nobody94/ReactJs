import React from 'react';
import Input from '../../components/input/Input';
import './Contact.css';
class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {      
       email:"",
       name:"",
       message:""
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
      <div className="container">
        <div className="contact-page">
          <div className="contact-message">
            <h2>Send a message</h2>
            <Input name="name" type="text" value={this.state.name} onChange={this.onChangeHandle} label="Name" required></Input>
            <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
            <textarea name="message" value={this.state.message} onChange={this.onChangeHandle} placeholder="Your Message" rows="7"></textarea>
            <div className="btn-actions">
              <button className="action submit" >Send message</button>
            </div>
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
