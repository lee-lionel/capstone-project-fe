import React from 'react'
import { Link } from 'react-router-dom'

const ParentProfile = () => {
  return (
    <div>
      name:
      <br/>
      email:
    <br/>
     <Link to='/create-post'>
         <button>Create Post</button>
         </Link>
  
    </div>
  )
}

export default ParentProfile
