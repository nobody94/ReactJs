import React, { Component } from 'react';

import Aux from '../../hoc/Auxx/Auxx';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
=======
>>>>>>> bc1cc5557e912b267a80ef15a79fa48fb6376143

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
        ingredients: null,

        totalPrice: 0,
=======
        totalPrice: 4,
>>>>>>> bc1cc5557e912b267a80ef15a79fa48fb6376143
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {

        console.log(this.props);
        axios.get( 'ingredients.json' )
            .then( response => {
                this.setState( { ingredients: response.data } );
            } )
            .catch( error => {
                this.setState( { error: true } );
            } );
    }

    updatePurchaseState ( ingredients ) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );          
        this.setState( { purchasable: sum > 0 } );
    }

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState( updatedIngredients );    
    }

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[type];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState( updatedIngredients );
=======
    }

    updatePurchaseState ( ingredients ) {
    }

    addIngredientHandler = ( type ) => {
        
    }

    removeIngredientHandler = ( type ) => {
        
>>>>>>> bc1cc5557e912b267a80ef15a79fa48fb6376143
    }

    purchaseHandler = () => {
        this.setState( { purchasing: true } );
    }

    purchaseCancelHandler = () => {
        this.setState( { purchasing: false } );
    }

    purchaseContinueHandler = () => {

       const queryParams = [];
       for(let i in this.state.ingredients){
           queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
       }
       queryParams.push('price=' + this.state.totalPrice);
       const queryString = queryParams.join('&');
       this.props.history.push({
           pathname:'/checkout',
           search: '?' + queryString
       });
=======
        
>>>>>>> bc1cc5557e912b267a80ef15a79fa48fb6376143
    }

    render () {
        // {salad: true, meat: false, ...}

        const disabledInfo = {...this.state.ingredients};
        for (let key in disabledInfo){
            disabledInfo[key] = (disabledInfo[key] <= 0)
        }
        let orderSumary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;
        if(this.state.ingredients){            
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice} 
                    />
                </Aux>
            );
            orderSumary = <OrderSummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}/>;
        }
        if(this.state.loading){
            orderSumary = <Spinner />;
        }
        return (
            <Aux>
                {/* Modal order */}
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSumary}
                </Modal>
                {/* Burger Builder */}
                {burger}
=======
        return (
            <Aux>
                {/* Modal order */}
                <h1>Burger Builder</h1>
                {/* Burger Builder */}
>>>>>>> bc1cc5557e912b267a80ef15a79fa48fb6376143
            </Aux>
        );
    }
}

export default withErrorHandler( BurgerBuilder, axios );