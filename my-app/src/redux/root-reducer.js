import { combineReducers } from 'redux';
import homeData from './home/home-data';
import shopData from './shop/shop-data';
import cartReducer from './cart/cart-reducer';
const rootReducer = combineReducers({
    homeData,
    shopData,
    cartReducer
})
export default rootReducer;