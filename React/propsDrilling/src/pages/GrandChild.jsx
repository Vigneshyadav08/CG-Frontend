import React from 'react'

const GrandChild = ({username}) => {
    console.log(username);
  return (
    <div>
        <h1>Grand Child Component</h1>
        <p>Username : {username}</p>
    </div>
  )
}

export default GrandChild
