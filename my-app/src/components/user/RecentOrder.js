import React from 'react';
import Order from './Order-detail';

class RecentOreder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isClick :false
        }
        this.viewMore = this.viewMore.bind(this);
    }  
    viewMore(){
        this.setState({
            isClick: !this.state.isClick
        })
    }
    render(){ 
        const order =  this.props.item.map((item)=>{      
            for(var i =0 ; i< this.props.item.length ;i++){         
              return <Order key={item.id} name={item.name} price={item.price} quantity={item.quantity} imageUrl={item.imageUrl}></Order>
            }  
          }); 
        return(
            <div className="order">
                <p className="order-view" onClick={this.viewMore}>Order: <strong>{this.props.orderNum}</strong></p>
                {
                    this.state.isClick
                    ? order 
                    : null
                }
                <p className="total">Total: {this.props.total}</p> 
            </div>
        )
    }
}

export default RecentOreder;
