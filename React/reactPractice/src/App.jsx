// import React, { use, useEffect, useState } from 'react'
// 
// const App = () => {
//   let [count,setCount] = useState(0);
//   let [state,setState] = useState(false);
// 
//   useEffect(()=>{
//     let intervalId;
// 
//     if(state){
//       intervalId = setInterval(()=> {setCount(count => count+1)},1000);
//     }
// 
//     return ()=>(clearInterval(intervalId));
//   },[state])
// 
//   function handleClick(){
//     setState(!state);
//   }
// 
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>Increment</button>
//       <button onClick={()=>setCount(count - 1)}>Decrement</button>
//       <button onClick={()=>setCount(0)}>Reset</button>
//     </div>
//   )
// }
// 
// export default App

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import Protect from "./Protect"
import Home from "./Home"
import Dashboard from "./Dashboard"
import Login from "./Login"


const App = () => {
  localStorage.setItem('isGrant','false')
  let router1 = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: "/dashboard",
      element: (
        <Protect>
          <Dashboard/>
        </Protect>
      )
    }
  ])

  return (
    <RouterProvider router={router1}>
      <div>
        App
      </div>
    </RouterProvider>
  )
}
export default App