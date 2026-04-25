// ! -- passing null as state
import React, { useState } from 'react'

const Data = () => {
    let [data,setData] = useState(null);
    console.log(data);
  return (
    <div>
        {
            data ? <h3>{data}</h3> : <h3>No Data</h3>
        }
        <button onClick={()=>setData("Data Loaded....")}>Change</button>
    </div>
  )
}

export default Data
