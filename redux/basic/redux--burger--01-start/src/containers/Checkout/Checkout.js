import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0
    }

    componentWillMount () {

        const query = new URLSearchParams(this.props.location.search);        
        const ingredients = {};
        let price = 0;
        for (let param of query.entries()){
            if (param[0] === 'price') {
                price = param[1];
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState( { ingredients: ingredients, totalPrice: price } );
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
=======
        
    }

    checkoutCancelledHandler = () => {
    }

    checkoutContinuedHandler = () => {
>>>>>>> bc1cc5557e912b267a80ef15a79fa48fb6376143
    }

    render () {
        return (
            <div>
                {/* CheckoutSummary */}

                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}
                />               
                {/* Contact Route */}
                <Route 
                    path={this.props.match.path + '/contact-data'}
                    render={(props)=>(<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/>)}
                />
=======
                <h1>Checkout</h1>
                {/* Contact Route */}
                
>>>>>>> bc1cc5557e912b267a80ef15a79fa48fb6376143
            </div>
        );
    }
}

export default Checkout;