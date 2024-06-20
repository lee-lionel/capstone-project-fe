import React, { useState } from "react";
import * as userApi from '../../utilities/users-service'
import './Login.css'

const Login = (props) => {
    const {setUser} = props
    const [userInput, setUserInput] = useState({
        input: '',
        password: '',
    })

    function handleChange(e) {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    async function handleSubmit (e) {
        e.preventDefault()
        try {
            const user = await userApi.login(userInput)
            setUser(user)
        } catch(error){
          alert(error)
            console.log(error)
        }
    }
  return (
    <form className='login-form' onSubmit={handleSubmit}>
      <h2>Tutors Connect</h2>
      <div className="input-group">
      <label>
        Email/Phone Number :
        <input name='input' type="text" onChange={handleChange}></input>
      </label>
      </div>
      <div className="input-group">
      <label>
        Password :
        <input name='password' type="password" onChange={handleChange}></input>
      </label>
      </div>
      <button>Login</button>
    </form>
  );
};

export default Login;
