import React from 'react';

class HomeItem extends React.Component {
  constructor(props){
    super(props);  

  }   
  
  render(){
    const item = 'item' + (this.props.size =='large'? ' large':''); 
    return (
      <div className={item}>
        <div className="banner">
          <img src={this.props.imageUrl}></img>
          <div className="content">
            <h3 className="title">{this.props.title}</h3>
            <span className="sub-title">Shop now</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeItem;
