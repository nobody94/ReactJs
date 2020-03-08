const initialState = {
    counter: 0,
    doubleCounter:0
}

const reducer = (state = initialState, action) => {
    console.log("[reducer]", { action })
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
            doubleCounter : state.doubleCounter + 2
        }
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
            doubleCounter : state.doubleCounter - 2
        }
    }
    if (action.type === 'ADD') {
        return {
            counter: state.counter + action.value
        }
    }
    if (action.type === 'SUB') {
        return {
            counter: state.counter - action.value
        }
    }
    return state;
};

export default reducer;