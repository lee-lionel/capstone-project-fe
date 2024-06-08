import React from 'react'
import { Link } from 'react-router-dom'

const TutorProfile = () => {
    //fetch 
  return (
    <div>
      name: 
      <br/>
      email:
      <br/>
      experience:
      <br/>
      subjects taught: 
      <br/>
      levels taught:
      <br/>
      preferred location:
      <br/>
     <Link to='/edit-profile'><button> edit info</button></Link> 
    </div>
  )
}

export default TutorProfile
