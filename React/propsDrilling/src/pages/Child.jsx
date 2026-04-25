import React from 'react'
import GrandChild from './GrandChild'

const Child = ({username}) => {
    console.log(username);
  return (
    <div>
      <h1>Child Component</h1>
      <GrandChild username={username}/>
    </div>
  )
}

export default Child
