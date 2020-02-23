import React from 'react';
import Item from '../../components/home/HomeItem';
import './Home.css';
import {connect} from 'react-redux';
class Home extends React.Component {
  constructor(props){
    super(props);  

  }   
  ListItem(){
    return this.props.data.map((item)=>{
      return(
        <Item key={item.id} imageUrl={item.imageUrl} title={item.title} linkUrl={item.linkUrl} size={item.size}></Item> 
      )
    });
  }
  render(){  
    console.log("image url " + this.props.data);  
    return (
      <div className="container">
        <div className="home-banner">
          {this.ListItem()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    data : state.collectionData,
  }
}
export default connect(mapStateToProps)(Home);
