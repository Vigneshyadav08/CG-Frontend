import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router'
import Home from './nestedPages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'
import Dashboard from './nestedPages/Dashboard'
import Profile from './nestedPages/Profile'
import Setting from './nestedPages/Setting'

const App = () => {
  return (
    <div>
        {/* <nav>
            <Link to="/"> Home | </Link>
            <Link to='/about'> About | </Link>
            <Link to='/contact'> Contact </Link>
        </nav> */}
        {/* <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav> <hr/> */}
      {/* <Routes>
        <Route path='/' element=<Home/> />
        <Route path='/about' element=<About/> />
        <Route path='/contact' element=<Contact/> />
        <Route path='*' element=<PageNotFound/> />
      </Routes> */}

      <Routes>
          <Route path='/' element=<Home/> />
          <Route path='/dashboard' element=<Dashboard />> 
            <Route path='profile' element=<Profile/> />
            <Route path='setting' element=<Setting/> />
          </Route>
      </Routes>
    </div>
  )
}

export default App
