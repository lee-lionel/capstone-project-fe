import React from "react";

const Login = () => {
  return (
    <form>
      <label>
        Email :
        <input type="email"></input>
      </label>
      <label>
        Password :
        <input type="password"></input>
      </label>
      <button>Login</button>
    </form>
  );
};

export default Login;
