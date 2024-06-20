import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { logOut } from '../../utilities/users-service';

const Navbar = (props) => {
  const {setUser} = props
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if(window.innerWidth>768) {
      setIsOpen(false)
    }
  }

  const handleLogOut = () => {
    logOut()
    setUser(null)
  }

  useEffect(()=> {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  },[])

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-links'>
          <Link to='/' className='hyperlink'>Home</Link>
          <Link to='/profile' className='hyperlink'>Profile</Link>
          <Link to='/view' className='hyperlink'>View</Link>
          <div className='hyperlink' onClick={handleLogOut}> Log Out</div>
        </div>
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          &#9776; {/* Hamburger menu icon */}
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to='/' className='hyperlink' onClick={toggleMenu}>Home</Link>
        <Link to='/profile' className='hyperlink' onClick={toggleMenu}>Profile</Link>
        <Link to='/view' className='hyperlink' onClick={toggleMenu}>View</Link>
        <div className='hyperlink' onClick={handleLogOut}> Log Out</div>
      </div>
    </div>
  );
};

export default Navbar;
