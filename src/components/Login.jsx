import React, { useState } from "react";
import * as userApi from '../utilities/api'

const Login = () => {
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
    })

    function handleChange(e) {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    async function handleSubmit (e) {
        e.preventDefault()
        try {
            const user = await userApi.login(userInput)
        } catch(error){
            console.log(error)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email :
        <input name='email' type="email" onChange={handleChange}></input>
      </label>
      <label>
        Password :
        <input name='password' type="password" onChange={handleChange}></input>
      </label>
      <button>Login</button>
    </form>
  );
};

export default Login;
