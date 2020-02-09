import * as actionTypes from './actions';

const initialState = {
    persons: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        // actionTypes.ADD_PERSON

        // actionTypes.REMOVE_PERSON

        default:
            break;
    }
    return state;
};

export default reducer;