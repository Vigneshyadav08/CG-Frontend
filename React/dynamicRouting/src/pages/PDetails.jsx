import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const PDetails = () => {
    let {id} = useParams();
    console.log(useParams());
    
    let [user,setUser] = useState(null);

    useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res)=>res.json())
            .then((data)=>setUser(data));
    },[id])

  return (
    <div>
        {
            user && (<div>
                        <h3>Personal Details</h3><hr/>
                        <p>Name - {user.name}</p>
                        <p>Email - {user.email}</p>
                        <p>Phone Number - {user.phone}</p>
                        <p>Address</p>
                        <p>Street - {user.address.street}</p>
                        <p>City - {user.address.city}</p>
                        <p>Zipcode - {user.address.zipcode}</p>
                    </div>)
        }
    </div>
  )
}

export default PDetails
