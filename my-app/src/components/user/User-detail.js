import React from 'react';
import firebase from '../../firebase/firebaseConfig';



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
        }
        });
    }  
   render(){
    return(
        <div className="user-page">
            <h3>Your information</h3>
            <p>Email:{this.state.email}</p>
        </div>
    );
   }
}

export default Detail;