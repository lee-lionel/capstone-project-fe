import React, { useState } from "react";
import * as userApi from '../utilities/users-service'

const Login = () => {
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
            console.log(user)
        } catch(error){
          alert(error)
            console.log(error)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email/Phone Number :
        <input name='input' type="text" onChange={handleChange}></input>
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
