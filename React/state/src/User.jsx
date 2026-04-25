import React, { useState } from 'react'

// ! --- passing array

const User = () => {
    let users = ["vignesh","sai","venkata"];
    let [user,changeUser] = useState(users);
    console.log(user);
    function addUser(){
        changeUser([...user,"abhi"]);
    }
  return (
    <>
      <ul>
        {
            user.map((m,index)=>(
                <li key={index}> {m} </li>
            ))
        }
      </ul>
      <button onClick={addUser}>Add User</button>
    </>
  )
}

export default User
