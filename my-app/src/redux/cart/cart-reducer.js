import CartActionTypes from './cart-type';
import {addItemToCart ,removeItemFromCart} from './cart-utils';

const initialState = {
    counter: 0,
    number:0,
    cartItems : [],  
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case CartActionTypes.INCREMENT:
            return {
                ...state,
                counter: state.number + 1
            }      
        case CartActionTypes.DECREMENT:
            return {
                ...state,
                counter: state.number - 1
            }  
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                counter: state.counter + 1,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }   
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                counter: state.counter - 1,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }       
    }
    return state;
};

export default reducer;