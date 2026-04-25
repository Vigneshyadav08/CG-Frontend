
export let reducer = (state,action) => {
    if(action.type == 'increment')
    {
        return {count : state.count + 1,isRunning: true};
    }
    if(action.type == 'decrement')
    {
        return {...state, isRunning: false};
    }
    return state;
}