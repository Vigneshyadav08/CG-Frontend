import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Setting from './pages/Setting'

const App = () => {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/dashboard',
      element: <Dashboard/>,
      children: [
        {
          path: 'contact',
          element: <Contact/>
        },
        {
          path: 'setting',
          element: <Setting/>
        }
      ]
    },
    {
      path: '/about',
      element: <About/>
    }
  ])

  return (
    <RouterProvider router={router}>
      App
    </RouterProvider>
  )
}

export default App
