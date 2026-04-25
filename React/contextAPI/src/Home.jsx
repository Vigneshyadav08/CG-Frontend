import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Home = () => {
    let {theme} = useContext(ThemeContext);
  return (
    <div>
      <h2 className='bg-red-400'>Theme: {theme}</h2>
    </div>
  )
}

export default Home
