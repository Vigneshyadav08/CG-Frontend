import React, { useEffect, useState } from 'react'

const Fetch = () => {
    let [data,setData] = useState([]);
    useEffect(()=>{
        let fetchUsers = async () => {
            try{
                let res = await fetch('https://jsonplaceholder.typicode.com/users');
                let data = await res.json();
                console.log(data);
                setData(data);
            }catch{
                console.log(error);
            }
        }
        fetchUsers();
    },[])
  return (
    <div>
      <ul>
        {
            data.map((i)=>(
                <li key={i.id}> {i.name} - {i.username} - {i.email}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Fetch
