import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <Link to='/' className='hyperlink'>Home</Link>
      <Link to='/authPage' className='hyperlink'>Auth Page</Link>
      <Link to='/profile' className='hyperlink'>Profile</Link>
      <Link to='/view' className='hyperlink'>View</Link>
    </div>
  )
}

export default Navbar
