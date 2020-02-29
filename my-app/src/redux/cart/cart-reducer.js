import CartActionTypes from './cart-type';
import {addItemToCart ,removeItemFromCart} from './cart-utils';

const initialState = {
    counter: 0,
    number:0,
    cartItems : [],  
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {       
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