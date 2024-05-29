import React, { useState } from "react";

const Login = () => {
    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
    })

    function handleChange(e) {
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    function handleSubmit (e) {
        e.preventDefault()
        console.log(userInput)
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
