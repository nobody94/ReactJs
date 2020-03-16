import React from 'react';
import { Link } from "react-router-dom";
import Minicart from '../minicart/Minicart';
import logo from '../../assets/crown.svg';
import './Header.css';
import firebase from '../../firebase/firebaseConfig';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
         user:{},        
        }; 
        this.logoutAccount = this.logoutAccount.bind(this);
    }
    componentWillMount(){
        this.authListener()       
    }
    authListener(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user});
                console.log(user);
            } else {
                this.setState({user:null})
            }
        })
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
            <header className="header">
                <div className="container">
                <Link to="/" className="logo"><img src={logo} alt="logo"></img></Link>
                <nav className="nav-section">
                    <ul className="navigation">          
                    <li><Link to="/shop">Shop</Link></li>   
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        {
                            this.state.user 
                            ? <span onClick={this.logoutAccount}><Link to="/logout">Logout</Link></span>
                            : <Link to="/sign-in">Sign in</Link>
                        }
                    </li> 
                    <li>
                        <Minicart></Minicart>
                    </li>  
                    </ul>
                </nav>
                </div> 
          </header>          
        );
    }
  }
  
  export default Header;
  