import React from 'react';
import firebase from '../../firebase/firebaseConfig';
import {connect} from 'react-redux';
import Input from '../input/Input';

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {          
           email:"",
           userName:null,
           address:'',
           phoneNumber:"",
           isAddress:false,
           isPhoneNumber:false,
           message:false
        };  
        this.onChangeHandle = this.onChangeHandle.bind(this);
        this.saveInformation = this.saveInformation.bind(this);
        this.changeInformation = this.changeInformation.bind(this);
        this.deleteAccount = this.deleteAccount.bind(this);
      }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            const currentComponent = this;
            if(user) {
                const currentUser =  firebase.auth().currentUser;               
                console.log(currentUser);
                let useremail = currentUser.email;
                let userName = currentUser.displayName;
                // console.log(useremail);
                this.setState({
                    email:useremail
                })
                if(userName){
                    this.setState({
                        userName:userName
                    })
                }
                this.props.isSignIn();
                if(currentUser.uid){
                    firebase.database().ref('users/' + currentUser.uid).on('value', function(snapshot) {
                        const accountInfo = snapshot.val();
                      // console.log(snapshot.val());
                      if(accountInfo.address && accountInfo.phoneNumber){
                        currentComponent.setState({
                            address:accountInfo.address,
                            phoneNumber:accountInfo.phoneNumber
                        })
                      }
                      if(currentComponent.state.address.length>0 && currentComponent.state.phoneNumber.length>0){
                       currentComponent.setState({
                        isAddress:true,
                        isPhoneNumber:true,
                        address:accountInfo.address,
                        phoneNumber:accountInfo.phoneNumber
                       })
                      }
                    });  
                }                 
            } else {
                this.props.isLogOut();
            }
        });        
    }  
    onChangeHandle = (e) =>{     
        this.setState(
          {       
            ...this.state, 
            [e.target.name]: e.target.value        
          }
        )  
        // console.log(this.state);  
    }
    saveInformation(){
        firebase.auth().onAuthStateChanged(user => {
            if(user) { 
              const currentUser =  firebase.auth().currentUser; 
              const data = {
               address:this.state.address,
               phoneNumber:this.state.phoneNumber                
              }
              if(this.state.address.length>0 && this.state.phoneNumber.length>0){
                    firebase.database().ref('users/' + currentUser.uid).update(data);   
                    this.setState({
                        isAddress:true,
                        isPhoneNumber:true,
                        message:false
                    }) 
               } else{
                    this.setState({
                        message:true,
                        isAddress:false,
                        isPhoneNumber:false
                    })
                }  
            }          
        }); 
    }
    changeInformation(){
        firebase.auth().onAuthStateChanged(user => {
            if(user) { 
              const currentUser =  firebase.auth().currentUser; 
              const data = {
               address:'',
               phoneNumber:''               
              }
              firebase.database().ref('users/' + currentUser.uid).update(data);  
              this.setState({
                  isAddress:false,
                  isPhoneNumber:false
              }) 
            }          
        });
    }
    deleteAccount(){
        firebase.auth().onAuthStateChanged(user => {
            if(user) { 
              window.location = `/sign-in`;  
              const currentUser =  firebase.auth().currentUser;
              firebase.database().ref('users/' + currentUser.uid).remove(); 
              currentUser.delete().then(function(){
                console.log('delete account success');              
              }).catch(function(error){
                console.log('Delete account: '+error);
              })         
            }          
        });
    }
   render(){
   
    return(
        <div className="user-page">
            <h3 className="title">My Account</h3>
            <div className="content">
                <h4>Account Information</h4>
                {
                    this.state.userName 
                    ? <p>Username: {this.state.userName}</p>
                    :null
                }
                <p>Email: {this.state.email}</p>
                <div className="btn-actions">
                        <button className="action delete" onClick={this.deleteAccount}>Delete Account</button>
                </div>
            </div>
           <div className="content">               
                <h4>More Information</h4>
                {
                 this.state.isAddress
                    ? <p>Address: {this.state.address}</p>
                 : <Input name="address" value={this.state.address} onChange={this.onChangeHandle} label="Address" required></Input>
                }
               {
                this.state.isPhoneNumber
                ?<p>Phone number: {this.state.phoneNumber}</p>
                : <Input name="phoneNumber" value={this.state.phoneNumber} onChange={this.onChangeHandle} label="Phone Number" required></Input>
               }
               {
                this.state.message
                ?<p className="message error">Field cannot be left blank. Please fill in your information</p>
                :null
               }
               {
                   this.state.isAddress && this.state.isPhoneNumber
                   ?   <div className="btn-actions">
                   <button className="action change" onClick={this.changeInformation}>Change Information</button>
                    </div>
                        :  <div className="btn-actions">
                        <button className="action save" onClick={this.saveInformation}>Save</button>
                    </div>
               }    
           </div>
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