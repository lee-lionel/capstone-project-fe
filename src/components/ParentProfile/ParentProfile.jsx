import React from 'react'
import { Link } from 'react-router-dom'

const ParentProfile = () => {
  return (
    <div>
      name:
      <br/>
      email:
      <br/>
      change password option:
      <br/>
     <Link to='/create-post'>
         <button>create post</button>
         </Link>
      
    </div>
  )
}

export default ParentProfile
