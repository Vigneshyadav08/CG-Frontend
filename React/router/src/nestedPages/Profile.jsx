import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Profile = () => {
    let [users,setUser] = useState([]);
    useEffect(()=>{
        let fetchUsers = async () => {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUser(res.data);
            console.log(res.data);
        }
        fetchUsers();
    },[])
  return (
    <div>
        <ol>
      {
        users.map((i)=>(
            <li key={i.id}>
                <ul key={i.id}  type='none'>
                    <li>Name  - {i.name}</li>
                    <li>UserName - {i.username}</li>
                    <li>Email - {i.email}</li>
                    <li>Phone - {i.phone}</li>
                    <li> Address : 
                        <ul key={i.id}>
                            <li>{i.address.street}</li>
                            <li>{i.address.city}</li>
                            <li>{i.address.zipcode}</li>
                        </ul>
                    </li>
                    <li>Website - {i.website}</li>
                    <li>
                        Company Details :
                        <ul key={i.id}>
                            <li>Name - {i.company.name}</li>
                            <li>Phrase - {i.company.catchPhrase}</li>
                        </ul>
                    </li>
                </ul>
            </li>
        ))
      }
      </ol>
    </div>
  )
}

export default Profile
