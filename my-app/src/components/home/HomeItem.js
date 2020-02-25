import React from 'react';
import { withRouter} from 'react-router-dom';
class HomeItem extends React.Component {
  constructor(props){
    super(props);  
    
  }   
 
  render(){   
    const item = 'item' + (this.props.size =='large'? ' large':''); 
    return (
      <div className={item} >
        <a className="banner" href={this.props.linkUrl}>
          <img src={this.props.imageUrl}></img>
          <div className="content">
            <h3 className="title">{this.props.title}</h3>
            <span className="sub-title">Shop now</span>
          </div>
        </a>
      </div>
    );
  }
}

export default withRouter(HomeItem);
