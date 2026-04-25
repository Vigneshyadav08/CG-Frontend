// import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home'
// import User from './pages/User'
// import Dashboard from './pages/Dashboard'
// import PDetails from './pages/PDetails'
// 
// const App = () => {
//   let router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Home/>
//     },{
//       path: '/dashboard',
//       element: <Dashboard/>,
//       children: [
//         {
//           path: 'user/:id',
//           element: <User/>,
//           children: [
//             {
//               path: 'details/:id',
//               element: <PDetails/>
//             }
//           ]
//         }
//       ]
//     }
//   ])
//   return (
//     <RouterProvider router={router}>App</RouterProvider>
//   )
// }
// 
// export default App

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./auth/Home"
import Dashboard from "./auth/Dashboard"
import Protect from "./auth/Protect"
import Login from "./auth/Login"

let router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/dashboard',
    element: (
      <Protect>
        <Dashboard/>
      </Protect>
    )
  }
])
const App = () => {
  return (
    <RouterProvider router={router}>
      <div>
        <h1>App component</h1>
      </div>
    </RouterProvider>
  )
}

export default App