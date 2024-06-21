import React from 'react'
import Login from '../../components/Login/Login'
import SignUp from '../../components/SignUp/SignUp'
import { useState } from 'react'
import './AuthPage.css'

const AuthPage = (props) => {
    const {setUser} = props
    const [choice,setChoice] = useState(true)
  return (
<div className="container">
  <div className="login-signup">
    {choice ? <Login setUser={setUser}/> : <SignUp setUser={setUser}/>}
  </div>
  <span className="toggle-text" onClick={() => setChoice(!choice)}>
    {choice ? 'Sign Up Instead' : 'Sign In Instead'}
  </span>
</div>

  )
}

export default AuthPage
