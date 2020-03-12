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
    componentDidMount(){
        this.authListener()
    }
    authListener(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user});
            } else {
                this.setState({user:null})
            }
        })
    }
    logoutAccount(e){
        e.preventDefault();
        firebase.auth().signOut().then(function() {            
            // this.props.history.push('/logout');
            // console.log(this.props.history);
            console.log('logout success');
          }).catch(function(error) {
            // An error happened.
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
                            ? <Link onClick={this.logoutAccount}>Logout</Link>
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
  