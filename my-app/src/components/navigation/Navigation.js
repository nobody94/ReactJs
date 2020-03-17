import React from 'react';
import { Link } from "react-router-dom";
import firebase from '../../firebase/firebaseConfig';
import {connect} from 'react-redux';
import './Navigation.css';

class Navigation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            myAccount:'',
        }; 
        this.logoutAccount = this.logoutAccount.bind(this);
    }
    componentDidMount(){
      firebase.auth().onAuthStateChanged(user => {
          const currentComponent = this;
          if(user) {
              const currentUser =  firebase.auth().currentUser;               
              currentComponent.setState({
                myAccount:currentUser.uid
              })                 
          } 
      });        
  }  
  logoutAccount(e){
    e.preventDefault();
        firebase.auth().signOut().then(function() { 
            console.log('logout success');
        }).catch(function(error) {
            console.log(error);
        });
    }  
    render(){        
        return (
            <nav className="nav-section">
                <ul className="navigation">          
                <li><Link to="/shop">Shop</Link></li>   
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    {
                        this.props.isSignIn 
                        ? <span><span><Link to={`/user/${this.state.myAccount}`}>My Account</Link></span><span onClick={this.logoutAccount}><Link to="/logout">Logout</Link></span></span>
                        : <Link to="/sign-in">Sign in</Link>
                    }
                </li> 
                </ul>
            </nav>       
        );
    }
  }
  function mapStateToProps(state){
    return{    
      isSignIn: state.userReducer.isSignIn
    }    
  }
  export default connect(mapStateToProps)(Navigation);
  