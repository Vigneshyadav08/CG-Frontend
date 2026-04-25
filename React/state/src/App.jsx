import { useState } from 'react';
import User from './User';
import Person from './Person';
import Data from './Data';

const App = () => {
    let [count,setCounter] = useState(0);
    console.log(count);

    function increment(){
      setCounter(count + 1);
    }
    function decrement(){
      setCounter(count - 1);
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>(setCounter(0))}>Reset</button>
      <button onClick={()=>(setCounter(count+1))}>ADD</button>

      <User/>
      <Person/>
      <Data/>
    </div>
  )
}


export default App
