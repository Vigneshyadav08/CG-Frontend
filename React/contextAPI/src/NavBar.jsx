import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const NavBar = () => {
    let {theme,toggleTheme} = useContext(ThemeContext);
    let styleNav = {
        backgroundColor: theme == 'light' ? 'whitesmoke' : 'black',
        color: theme == 'light' ? 'black' : 'white'
    }
  return (
    <div >
      <h1 style={styleNav}>Navbar</h1>
      <button onClick={toggleTheme} className='bg-amber-600'>{theme}</button>
    </div>
  )
}

export default NavBar
