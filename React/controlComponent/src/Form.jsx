import React, { useState } from 'react'

const Form = () => {
   let user = {
        userName: '',
        password: '',
        gender: '',
        skills: [],
        option: '',
        message: ''
    }
    let [data,setData] = useState(user);
    let [users,setUser] = useState(user);
    let labelColor = {
        color: '#ff7b72'
    }
    function handleChange(e){
        console.log(e);
        let {name,value} = e.target;
        setData({...data,[name]:value});
    }

    function handleCheck(e){
        console.log(e);
        let {checked,value} = e.target;
        setData({...data,skills: checked ? [...data.skills,value] : data.skills.filter(i => i !== value)});
    }
    
  return (
    <div style={{"display":'flex','flexDirection':'column','justifyContent':'center','alignItems':'center','height':'100vh'}}>
      <form style={{color: 'black',fontWeight: 'bolder'}}>
        <fieldset style={{backgroundColor: 'black',color: '#bf95f9',borderRadius:'10px',border: '2px solid black'}}>
            <legend style={{color: 'white',backgroundColor:'transparent',textAlign: 'center'}}>Details</legend>
            
            <label for="userName" style={labelColor}>UserName: </label>
            <input type="text" name="userName" id="userName" value={data.userName} placeholder='enter username' onChange={handleChange}/>
            <br /><br />

            <label for="password">Password: </label>
            <input type="text" name="password" id="" value={data.password} placeholder='enter password' onChange={handleChange}/>
            <br /><br />

            <label>Gender</label>
            <br/>
            <input type='radio' name='gender' id='' value="Male" onChange={handleChange}/> Male 
            <br />
            <input type="radio" name='gender' id='' value="Female" onChange={handleChange}/>Female

            <br/>
            <br/>

            <label >Skills</label> 
            <br />
            <input type='checkbox' name='skills' id="" value='Sleeping'  onChange={handleCheck}/> Sleeping
            <input type='checkbox' name='skills' id="" value='Reading'  onChange={handleCheck}/> Reading
            <input type='checkbox' name='skills' id="" value='Writing' onChange={handleCheck}/> Writing

            <br/>
            <br/>

            <label>City</label>
            <br/>
            <select name='option' id='' onChange={handleChange} value={data.option}>
                <option value="" disabled>Select</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Vizag">Vizag</option>
                <option value="Hyderabad">Hyderabad</option>
            </select>

            <br/>
            <br/>

            <label>Message</label>
            <br/>
            <textarea value={data.message} name='message' onChange={handleChange}></textarea>
            </fieldset>
        </form>
        {/* <hr></hr>
        <h1>UserName: {data.userName}</h1>
        <h2>Password: {data.password}</h2>
        <h2>Gender: {data.gender}</h2>
        <h2>Skills: 
            {data.skills.join(" , ")}
        </h2>
        <h2>Location: {data.option}</h2>
        <h2>Message:  {data.message}</h2>

        <br /><br />
        <hr/> */}
    </div>
  )
}

export default Form
