import * as actionTypes from './actionTypes';

export const saveResult = (res) => {
    console.log('store result',res);
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    };
};

export const storeResult = (res) => {
    return (dispatch,getState) => {
        setTimeout(() => {           
            dispatch(saveResult(res));           
        },2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        typr:actionTypes.DELETE_RESULT,
        resultElId :resElId
    };
};