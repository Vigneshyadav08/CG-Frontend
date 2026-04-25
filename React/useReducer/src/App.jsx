import React, { useEffect, useReducer } from 'react'
import { reducer } from './Reducer'

const App = () => {
  let [state,dispatch] = useReducer(reducer,{count: 0,isRunning: false});
  useEffect(()=>{
    let intervalId;
    
    if(state.isRunning){
      intervalId = setInterval(()=>{
        dispatch({type: 'increment'})
      }, 1000)
    }
    return () => clearInterval(intervalId);

  },[state.isRunning])
  return (
    <div>
      <h1>App Component </h1>

      <h3>{state.count}</h3>

      <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
      <button onClick={() => dispatch({type: 'decrement'})}>Decrement </button>
    </div>
  )
}

export default App
