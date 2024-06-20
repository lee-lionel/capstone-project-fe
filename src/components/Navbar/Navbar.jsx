import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { logOut } from '../../utilities/users-service';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {setUser} = props

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut()
    setUser(null)
  }

  return (
    
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-links'>
          <Link to='/' className='hyperlink'>Home</Link>
          <Link to='/profile' className='hyperlink'>Profile</Link>
          <Link to='/view' className='hyperlink'>View</Link>
          <div className='hyperlink' onClick={handleLogOut}>Log Out</div>
        </div>
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          &#9776; {/* Hamburger menu icon */}
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to='/' className='hyperlink-m' onClick={toggleMenu}>Home</Link>
        <Link to='/profile' className='hyperlink-m' onClick={toggleMenu}>Profile</Link>
        <Link to='/view' className='hyperlink-m' onClick={toggleMenu}>View</Link>
        <div className='hyperlink-m' onClick={handleLogOut}>Log Out</div>
      </div>
    </div>
  
  );
};

export default Navbar;
