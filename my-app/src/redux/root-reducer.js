import { combineReducers } from 'redux';
import homeData from './home/home-data';
import shopData from './shop/shop-data';

export default combineReducers({
    homeData,
    shopData
})