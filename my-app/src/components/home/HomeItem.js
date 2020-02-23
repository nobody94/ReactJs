import React from 'react';
import { withRouter} from 'react-router-dom';
class HomeItem extends React.Component {
  constructor(props){
    super(props);  
    // this.itemClickHandle = this.itemClickHandle.bind(this);
  }   
  itemClickHandle(){    
    // history.push(`{this.props.linkUrl}`)
  }
  render(){
    const linkUrl=this.props.linkUrl;
    const item = 'item' + (this.props.size =='large'? ' large':''); 
    return (
      <div className={item} /*onClick={() => history.push(`${linkUrl}`)}*/>
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

export default withRouter(HomeItem);
