import React from 'react';
import { withRouter,Link} from 'react-router-dom';

// class HomeItem extends React.Component{
//  render(){
//   const item = 'item' + (this.props.size =='large'? ' large':''); 
//   return (
//     <div className={item} >
//       <Link className="banner" to={`/shop/${this.props.title}`}>
//         <img src={this.props.imageUrl}></img>
//         <div className="content">
//           <h3 className="title">{this.props.title}</h3>
//           <span className="sub-title">Shop now</span>
//         </div>
//       </Link>
//     </div>
//   );
//  }
// }
const HomeItem = (props,{match}) =>{
  const item = 'item' + (props.size =='large'? ' large':''); 
    return (
      <div className={item} >
        <Link className="banner" /*to={`${match.url}${props.linkUrl}`}*/ >
          <img src={props.imageUrl}></img>
          <div className="content">
            <h3 className="title">{props.title}</h3>
            <span className="sub-title">Shop now</span>
          </div>
        </Link>
      </div>
    );
}
export default withRouter(HomeItem);
