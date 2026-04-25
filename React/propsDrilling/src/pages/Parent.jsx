import React from 'react'
import Child from './Child'

const Parent = ({username}) => {
    console.log(username);
  return (
    <div>
      <h1>Parent Componet</h1>
      <Child username={username}/>
    </div>
  )
}

export default Parent
