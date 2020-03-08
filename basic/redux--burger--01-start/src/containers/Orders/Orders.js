import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {

        axios.get('/orders.json')
        .then(res => {
            const fetchedOrders = [];
            for (let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({loading:false,orders:fetchedOrders});
        })
        .catch(err =>{
            this.setState({loading:false});
        });
=======
        
>>>>>>> bc1cc5557e912b267a80ef15a79fa48fb6376143
    }

    render () {
        return (
            <div>
                {/* Order Data */}

               {this.state.orders.map(order =>(
                   <Order 
                    key = {order.id}
                    ingredients = {order.ingredients}
                    price = {order.price}
                   />
               ))}
=======
                <h1>Order data</h1>
>>>>>>> bc1cc5557e912b267a80ef15a79fa48fb6376143
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);