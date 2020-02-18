import React from 'react';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Greeting from './Greeting'
import './Login.css'
class LoginControl extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            isLoggedIn : false,
            username : "",
            password : ""
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleClick(){
        this.setState({
            isLoggedIn : !this.state.isLoggedIn
        });
        if(this.state.isLoggedIn){
            this.handleReset();
        }        
    }
    handleChange({target}){
        this.setState({
            [target.name] : target.value
        });
    }
    handleReset(){
        this.setState({
            username : "",
            password : ""
        });
    }
    render(){
       console.log("isLoggedIn: ",this.state.isLoggedIn);
       const isLoggedIn = this.state.isLoggedIn;
       const name = this.state.username;
       const pass = this.state.password;
       let button;
       if(isLoggedIn){
            button = <LogoutButton clicked={this.handleClick}/>;
       } else {
            button = <LoginButton clicked={this.handleClick} />
       }
        return(
            <div className="login-control">
                <Greeting login={isLoggedIn} name={name} pass={pass}/>
                <div className="login-form">
                    <div className="info">
                        <span className="label">Username: </span>
                        <input name="username" value={this.state.username} onChange={this.handleChange}></input>
                    </div>
                    <div className="info">
                        <span className="label">Password: </span>
                        <input name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>
                    {button}
                </div>  
            </div>
        )
    }
}
export default LoginControl;