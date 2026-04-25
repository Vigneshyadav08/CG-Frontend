import React, { useState } from 'react'

const App = () => {
    let [role,setRole] = useState('');
    console.log(role);
  return (
    <div>
      <button onClick={()=>setRole('guest')}>Guest</button>
      <button onClick={()=>setRole('user')}>User Login</button>
      <button onClick={()=>setRole('admin')}>Admin Login</button>
      {
        role === 'guest' && <h1>You are guest, please leave fast</h1>
      }
      {
        role === 'user' && <h1>You are user, thank you for your trust</h1>
      }
      {
        role === 'admin' && <h1>You are admin, Anna namastey</h1>
      }
    </div>
  )
}

export default App
