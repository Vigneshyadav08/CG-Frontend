import { useState } from 'react';
import Filtered from './Filtered';
import Form from './Form';

const App = () => {
    // let user = {
    //     userName: '',
    //     password: '',
    //     gender: '',
    //     skills: [],
    //     option: '',
    //     message: ''
    // }
    // let [data,setData] = useState(user);
    // let [users,setUser] = useState(user);

    // function handleChange(e){
    //     console.log(e);
    //     let {name,value} = e.target;
    //     setData({...data,[name]:value});
    // }

    // function handleCheck(e){
    //     console.log(e);
    //     let {checked,value} = e.target;
    //     setData({...data,skills: checked ? [...data.skills,value] : data.skills.filter(i => i !== value)});
    // }

  return (
    <div>
        {/* <form>
            <input type="text" name="userName" id="" value={data.userName} placeholder='enter username' onChange={handleChange}/>
            <br /><br />
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

        </form>
        <hr></hr>
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
        <Form/>
        {/* <Filtered/> */}
    </div>
  )
}

export default App
