import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({children}) => {
    let [theme,setTheme] = useState('light');

    let toggleTheme = () => {
        setTheme(theme == 'light' ? 'dark' : 'light');
    }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
