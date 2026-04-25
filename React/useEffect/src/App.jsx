// import React, { useEffect, useState } from 'react'

// import axios from "axios";
// import { useEffect, useState } from "react"

// const App = () => {
//     let [count,setCount] = useState(0);
//     let [count2,setCount2] = useState(0);
//     useEffect(()=>(
//         alert('Hey this is effect...')
//     ),[count])
//     console.log("component mounted....");
//   return (
//     <div>
//         <h1>Count1: {count}</h1>
//         <h1>Count2: {count2}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <button onClick={()=>setCount2(count2+1)}>Increment C2</button>
//     </div>
//   )
// }

// export default App

// ! ---- 
// const App = () => {
//     let [count,setCount] = useState(0);
//     let [data,setData] = useState([]);
    
//     useEffect(()=>{
//         let fetchUsers = async () => {
//             try{
//                 let res = await fetch('https://jsonplaceholder.typicode.com/users');
//                 data = await res.json();
//                 console.log(data);
//                 setData(data);
//             }catch{
//                 console.log(error);
//             }
//         }
//         fetchUsers();
//     },[count])
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Fetch</button>
//             <ul>
//                 {
//                     data.map((i,index)=>(
//                         <li key={index}>{i.name}</li>
//                     ))
//                 }
//             </ul>
//         </div>
//     )
// }
// export default App

// ! -----

// import React, { useState } from 'react'
// import Child from './Child';
// import Fetch from './Fetch';

// const App = () => {
//     let [show,setShow] = useState(true);
//     let [fetch,setFetch] = useState(false);
//   return (
//     <div>
//       <button onClick={()=>setShow(!show)}>
//         {show ? "hide child":"show child"}
//       </button>
//       {show && <Child/>}

//       <button onClick={()=>setFetch(!fetch)}>
//         {
//             fetch ? "Hide Users Detail": "Fetch Users Detail"
//         }
//       </button>
//       {fetch && <Fetch/>}
//     </div>
//   )
// }

// export default App

// !---- axios
// import axios from "axios";
// import { useEffect, useState } from "react"

// const App = () => {
//     let [user,setUser] = useState([]);

//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((res) => (
//             console.log(res),
//             setUser(res.data)))
//         .catch((err)=>console.log(err));
//     },[])

//     return (
//         <div>
//             {
//                 user.map((u)=>(
//                     <p key={u.id}> {u.name} </p>
//                 ))
//             }
//         </div>
//     )
// }

// export default App;

// ! ------

import axios from "axios";
import { useEffect, useState } from "react"

const App = () => {
    let [user,setUser] = useState([]);

    useEffect(()=>{
        let fetchData = async () => {
            try{
                let res = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUser(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[])

    return (
        <div>
            {
                user.map((u)=>(
                    <p key={u.id}> {u.name} </p>
                ))
            }
        </div>
    )
}

export default App;