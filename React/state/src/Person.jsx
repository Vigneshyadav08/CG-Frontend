// !-- Passing object

import React, { useState } from 'react'

const Person = () => {
    let [person,changePerson] = useState({
        userName: "vignesh",
        marks: 98
    });
    console.log(person);

    function changeUser(){
        changePerson({
            ...person, 
            marks: person.marks + 10
        })
    }
  return (
    <>
      <h2>{person.userName} - {person.marks}</h2>
      <button onClick={changeUser}>Add Marks</button>
    </>
  )
}

export default Person
