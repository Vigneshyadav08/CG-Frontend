import React from 'react'
import { Link, Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
      <nav>
        <Link to={'contact'}>Contact</Link> | {""}
        <Link to={'setting'}>Setting</Link> | {""}
      </nav>
      <hr/>
      <Outlet/>
      <Link to={'/'}>Back To Home</Link>
    </div>
  )
}

export default Dashboard
