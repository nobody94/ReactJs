import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    //   this.handleClick = this.handleClick.bind(this);
    }
    //DidMount chạy sau render
    componentDidMount(prev,next){
        console.log("[Clock] componentDidMount");
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // componentWillUnmount(){
    //     clearInterval(this.timerID);
    // }
    tick(){
        this.setState({
            date:new Date()
        });
        console.log("[Clock] tick");
        // this.setState((state,props) => {
        //     date:new Date()
        // }); 
    }
    render() {
      return (
        <div>          
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}

// const Clock = (props) =>{
//     return <div></div>
// }
    
export default Clock;
//CLock ko cần đặt giống tên file