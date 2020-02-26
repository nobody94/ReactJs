import CartActionTypes from './cart-type';

export const addToCart= item =>{
    return{
        type: CartActionTypes.ADD_ITEM,
        payload:item 
    }
}