import React from 'react';
import './LifeCycle.css';

class Lifecycle extends React.Component {
    constructor(props) {
       super(props);
       
       this.state = {
          data: 0,
          disabled:true
       }
       this.incrementHandle = this.incrementHandle.bind(this);
       this.decrementHandle = this.decrementHandle.bind(this);
    };
    incrementHandle() {
       this.setState({data: this.state.data + 1,disabled:false})
    }
    decrementHandle(){
       if(this.state.data > 0){
         this.setState({data: this.state.data - 1})
       } else {
          this.setState({
             data:0
         })
       }  
       if(this.state.data = 1){
          this.setState({ disabled:true})
       }     
    }
    render() {
       return (
          <div className="LifeCycle">
            <button onClick = {this.decrementHandle} disabled={this.state.disabled}>DECREMENT</button> 
             <Content myNumber = {this.state.data}></Content>
             <button onClick = {this.incrementHandle}>INCREMENT</button>
          </div>
       );
    }
 }
 class Content extends React.Component {
    componentWillMount() {
       console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
       console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {    
       console.log('Component WILL RECIEVE PROPS!',newProps);
    }
    shouldComponentUpdate(newProps, newState) {
       return true;
    }
    componentWillUpdate(nextProps, nextState) {
       console.log('Component WILL UPDATE!', nextProps,nextState);
    }
    componentDidUpdate(prevProps, prevState) {
       console.log('Component DID UPDATE!', prevProps,prevState);
    }
    componentWillUnmount() {
       console.log('Component WILL UNMOUNT!')
    }
    render() {
       return (
         <h3 className="number">{this.props.myNumber}</h3>
       );
    }
 }
 export default Lifecycle;