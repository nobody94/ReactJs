import { combineReducers } from 'redux';
import homeData from './home/home-data';
import shopData from './shop/shop-data';
const rootReducer = combineReducers({
    homeData,
    shopData
})
export default rootReducer;