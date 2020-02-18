import React from 'react';

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn:true,
            username:'',
            password:'',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        console.log("handleClick", e);
        this.setState(state =>({
            isToggleOn: !state.isToggleOn
        }))
    }
    handleChange(e){
        console.log("handleChange", e.target);
        const name = e.target.name;
        const stateName = name == 'username' ? 'username' : 'password';
        this.setState(state =>({
            password:e.target.value
        }))
    }
    render(){
        return(
            <div>
                {/* 3 ways to write  */}
                {/* <button onClick={this.handleClick}>no binding {this.state.isToggleOn ? "On" : "Off"}</button> */}
                <input onChange={this.handleChange} name="username"/> <br></br>
                <input onChange={this.handleChange} name="password"/>
                {/* <button onClick={() => this.handleClick()}>{this.state.isToggleOn ? "On" : "Off"}</button>
                <button onClick={this.handleClick.bind(this,'id')}>binding {this.state.isToggleOn ? "On" : "Off"}</button> */}
            </div>
        )
    }
}
    
export default Toggle;