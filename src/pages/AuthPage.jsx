import React from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useState } from 'react'

const AuthPage = (props) => {
    const {setUser} = props
    const [choice,setChoice] = useState(true)
  return (
    <div>

{choice ? <Login setUser={setUser}/> : <SignUp setUser={setUser}/>}
      
      <button onClick={() => setChoice(!choice )}>
      {choice ? 'Sign Up Instead' : 'Sign In Instead'}
      </button>
  
    </div>
  )
}

export default AuthPage
