import React from 'react';
import Information from './User-information';
import RecentOrder from './RecentOrder';
import firebase from '../../firebase/firebaseConfig';
class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {   
            recentOrder:null,
            isOrder:false
         }; 
      }
      componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            const currentComponent = this;
            if(user) {
                const currentUser =  firebase.auth().currentUser;   
                if(currentUser.uid){
                    firebase.database().ref('users/' + currentUser.uid).on('value', function(snapshot) {
                        const accountInfo = snapshot.val();
                      // console.log(snapshot.val());                      
                      if(accountInfo.shopping){
                        currentComponent.setState({
                            isOrder:true,
                            recentOrder:accountInfo.shopping
                        })
                      } else{
                          currentComponent.setState({
                              isOrder:false
                          })
                      }
                    });  
                }                 
            } 
        });        
    }  
    ListItem(){     
        // console.log(this.state.recentOrder ? Object.values(this.state.recentOrder) : '');    
        return this.state.recentOrder ? Object.values(this.state.recentOrder).map((item)=>{
            for(var i = 0 ; i< Object.values(this.state.recentOrder).length ;i++){
                return <RecentOrder key={item.orderNum} orderNum={item.orderNum} item={item.item} total={item.totalPrice}></RecentOrder>;
            }
        })
        : '';        
    }
   render(){
    return(
        <div className="user-page">
            <h3 className="title">My Account</h3>
            <Information></Information>
            <h4>Recent Order</h4>
            <div className="recent-order">
                {
                    this.state.isOrder
                    ? this.ListItem()
                    : <p className="message">You don't have any order yet!</p>
                }
                {/* {this.ListItem()} */}
            </div>           
        </div>
    );
   }
}
export default Detail;