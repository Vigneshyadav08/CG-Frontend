import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router'

const Dashboard = () => {
  return (
    <div>
        <nav>
            <Link to={'profile'}>Profile</Link> | {" "}
            <Link to={'setting'}>Setting</Link>
        </nav>
        <hr/>
        <Outlet/>
    </div>
  )
}

export default Dashboard
