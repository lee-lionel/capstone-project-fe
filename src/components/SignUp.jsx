import React from "react";
import { useState } from "react";

const SignUp = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (event) => {
    const inputValue = event.target.value
    if (inputValue.length <= 8) {
      setPhoneNumber(inputValue);
    }
  };
  return (
    <form>
      <label>
        Email :<input type="email"></input>
      </label>
      <label>
        Password :<input type="password"></input>
      </label>
      <label>
        Phone No : +65
        <input type="number" inputMode="numeric" value={phoneNumber} onChange={handlePhoneNumberChange}></input>
      </label>
      <label>
        Are you a :
        <select>
          <option>Tutor</option>
          <option>Parent</option>
        </select>
      </label>
      <button>Sign Up</button>
    </form>
  );
};

export default SignUp;
