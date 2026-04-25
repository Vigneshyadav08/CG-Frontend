import React from 'react'
import Parent from './pages/Parent'

const App = () => {
  let username = 'vignesh';
  return (
    <div>
      <h1>App Component</h1>
      <Parent username={username}/>
    </div>
  )
}

export default App
