import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const User = () => {
    let {id} = useParams();
    console.log(useParams());
    
    let [user,setUser] = useState(null);

    useEffect(()=>{
        let fetchData = async () => {
            // fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            // .then((res)=>res.json())
            // .then((data)=>setUser(data));

            let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            setUser(res.data);
        }
        fetchData()
    },[id])

  return (
    <div>
        {
            user && <h2>UserName - {user.username}</h2>
        }
        <Link to={'/'}>Back To Home</Link> | {""}
        <Link to={`details/${id}`}>Personal Details</Link>
        <Outlet/>
    </div>
  )
}

export default User
