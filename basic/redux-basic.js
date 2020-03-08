//import
const redux = require('redux');
const createStore = redux.createStore;
// state
const initialState = {
    counter : 0
}
//reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return{
            ...state,
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return{
            ...state,
            counter: state.counter + action.value
        }
    }
    if(action.type === 'SUB_COUNTER'){
        return{
            ...state,
            counter: state.counter - action.value
        }
    }
}
//store 
const store = createStore(rootReducer);
console.log(store.getState());
//subcription
store.subscribe(()=>{
    console.log('[Subscription]', store.getState());
});
//dispatch
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value: 7});
store.dispatch({type:'SUB_COUNTER',value: 5});