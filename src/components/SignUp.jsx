import React from "react";
import { useState } from "react";

const SignUp = () => {

  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    role: 'Tutor',
  })

  function handleChange(e) {
    const inputValue = e.target.value
    if (e.target.name == 'phoneNumber') {
        if(inputValue.length <=8) {
            setUserInput({ ...userInput, phoneNumber: inputValue });
        }      
    } else {
    setUserInput({ ...userInput, [e.target.name]: inputValue });
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(userInput)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name :<input name='name' type="text" onChange={handleChange}></input>
      </label>
      <label>
        Email :<input name='email' type="email" onChange={handleChange}></input>
      </label>
      <label>
        Password :<input name='password' type="password" onChange={handleChange}></input>
      </label>
      <label>
        Phone No : +65
        <input
            name="phoneNumber"
          type="number"
          inputMode="numeric"
          value={userInput.phoneNumber}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        You are a :
        <select name='role' onChange={handleChange}>
          <option>Tutor</option>
          <option>Parent</option>
        </select>
      </label>
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;
