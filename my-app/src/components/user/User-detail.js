import React from 'react';
import firebase from '../../firebase/firebaseConfig';
import {connect} from 'react-redux';


class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {          
           email:"",
           userName:''
        };  
      }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                const currentUser =  firebase.auth().currentUser;
                console.log(currentUser);
                let useremail = currentUser.email
                console.log(useremail);
                this.setState({
                    email:useremail
                })
                this.props.isSignIn();
            } else {
                this.props.isLogOut();
            }
        });
    }  
   render(){
    return(
        <div className="user-page">
            <h3>My Account</h3>
            <p>Email:{this.state.email}</p>
        </div>
    );
   }
}
const mapDispatchToProps = dispatch => {
    return {     
        isSignIn: () => dispatch({type:'ISSIGNIN'}),
        isLogOut:() => dispatch({type:'ISLOGOUT'}),
    }
  };
  export default connect(null,mapDispatchToProps)(Detail);