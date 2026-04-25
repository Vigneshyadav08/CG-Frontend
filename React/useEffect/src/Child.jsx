import React, { useEffect } from 'react'

const Child = () => {
    useEffect(()=>{
        console.log("");
        let i = setInterval(()=>(
            console.log('running....')
        ),1000)

        return () => {
            console.log('cleanup called.....');
            clearInterval(i);
        }
    })
  return (
    <div>
      <h1>From Child</h1>
    </div>
  )
}

export default Child


