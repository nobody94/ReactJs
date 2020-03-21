import React from 'react';
import Input from '../input/Input';
import firebase from '../../firebase/firebaseConfig';
import {connect} from 'react-redux';
import{Redirect} from 'react-router-dom';

class CheckoutPayment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address:"",
            email:"",
            isEmail:false,
            isAddress:false,
            notEmail:false,
            isSuccess:false,
            orderNum: Math.floor(Math.random() * (100000001 - 1000000)) + 1000000
        }; 
        this.onChangeHandle = this.onChangeHandle.bind(this); 
        this.buyHandle = this.buyHandle.bind(this);
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            const currentComponent = this;
            if(user) {
                const currentUser =  firebase.auth().currentUser;
                this.setState({
                    email:currentUser.email ,
                    isEmail:true                  
                })
                if(currentUser.address){
                    this.setState({
                        address:currentUser.address,
                        isAddress:true
                    })
                }
            }
        });        
    }  
    onChangeHandle = (e) =>{  
        this.setState(
          {
            [e.target.name]: e.target.value
          }
        )   
    }
    buyHandle(e){
        e.preventDefault();
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const test = pattern.test(this.state.email);
        if(test){
            if(this.props.isLogin){
                firebase.auth().onAuthStateChanged(user => {
                    if(user) { 
                        const currentUser =  firebase.auth().currentUser; 
                    //   console.log(currentUser.uid); 
                        const data = {
                        address:this.state.address,
                        item: this.props.item,
                        orderNum:this.state.orderNum         
                        }
                        firebase.database().ref('users/' + currentUser.uid).update(data);                       
                    }          
                });
            } else{
                const data = {
                    email:this.state.email,
                    address:this.state.address,
                    item: this.props.item,
                    orderNum:this.state.orderNum      
                }
                firebase.database().ref().child('shopping/').push(data); 
            }  
            this.setState({
                notEmail:false,
                isSuccess:true
            });
        }
        else{
            this.setState({
                notEmail:true,
                isSuccess:false
            });
        }
        this.setState({
            email:'',
            address:''
        })
    }
    
    render(){  
        // console.log("list checkout item: " + this.props.item) ;  
        // console.log(this.props.isLogin);
        return(
            <div className="checkout-payment">
                <div className="content">
                    <h4 className="title">Information</h4>
                    {
                        this.state.isEmail 
                        ? <p>Email: {this.state.email}</p>
                        : <Input name="email" type="email" value={this.state.email} onChange={this.onChangeHandle} label="Email" required></Input>
                    }
                    {this.state.notEmail ? <p className="message error">The email address must be in xxx@yyy.zzz format. Please try again</p> : null}
                    {
                        this.state.isAddress
                        ? <p>Address: {this.state.address}</p>
                        : <Input name="address" type="text" value={this.state.address} onChange={this.onChangeHandle} label="Address" required></Input>
                    }                   
                </div>
                <div className="content">
                    <h4 className="title">Payment method</h4>                    
                    <Input type="radio" name="payment" value="" label="Cash on delivery" for="cash" id="cash" checked></Input>
                    <Input type="radio" name="payment" value="" label="Checkout with Paypal" disabled for="paypal" id="paypal"></Input>
                    <Input type="radio" name="payment" value="" label="Other" for="other" id="other" disabled></Input>                                
                </div>
                <div className="btn-actions">
                    {
                        this.state.isSuccess 
                        ? <Redirect to={{
                            pathname: 'checkout-success',
                            state: { codeOrder:this.state.orderNum }
                        }}></Redirect>
                        :  <button className="action buy" onClick={this.buyHandle}>Buy now</button>
                    }
                </div>                
            </div>
        )
    }
}
function mapStateToProps(state){
    return{    
     isLogin: state.userReducer.isSignIn
    }    
  }
export default connect(mapStateToProps)(CheckoutPayment);