import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();
    let [error,setError] = useState('');
    let login = {
        userName: '',
        password: ''
    }
    let [user,setUser] = useState(login);
    function handleChange(e){
        let {name,value} = e.target;
        setUser({...user,[name]:value});
    }

    function handleSubmit(e){
        let userName = 'vignesh';
        let password = '1234';
        e.preventDefault();
        if(user.userName === userName && user.password === password)
          {
            localStorage.setItem('isGranted','true');
            setError('User logged in successfully');
            navigate('/dashboard');
          }
        else
          setError('Loggin failed');
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Login</legend>
            <label for="">UserName: </label>
            <input type='text' name='userName' value={user.userName} onChange={handleChange}/>
            <br/>
            <label for="">Password: </label>
            <input type='text' name='password' value={user.password} onChange={handleChange}/>
            <br>
            </br>
            <p style={{"color":'red'}}>{error}</p>
            <br></br>
            <input type='submit'></input>
            
        </fieldset>
      </form>
    </div>
  )
}

export default Login
