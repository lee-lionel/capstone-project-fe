import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    if(window.innerWidth>768) {
      setIsOpen(false)
    }
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
        </div>
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          &#9776; {/* Hamburger menu icon */}
        </div>
      </div>
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to='/' className='hyperlink' onClick={toggleMenu}>Home</Link>
        <Link to='/profile' className='hyperlink' onClick={toggleMenu}>Profile</Link>
        <Link to='/view' className='hyperlink' onClick={toggleMenu}>View</Link>
      </div>
    </div>
  );
};

export default Navbar;
