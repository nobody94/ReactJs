import React from 'react';

class Form extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            value : ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            value : event.target.value
        });
    }
    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        //sau khi submit trang sẽ tự load lại, dùng  event.preventDefault(); để ngăn chặn việc load lại trang
        //preventDefault(), stopPropagation()
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="submit"></input>
            </form>
        );
    }
}
export default Form;