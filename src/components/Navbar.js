import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes, FaLaptopCode } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);
    
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <FaLaptopCode className='navbar-icon' />
              Chris Haynes
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/qualifications'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Qualifications
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/projects'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className='nav-item'>
                {button ? (
                  <Link to='/sign-up' 
                  className='nav-links'
                  onclick={closeMobileMenu}>
                      Extracurricular                  
                  </Link>
                ) : (
                  <Link to='/sign-up' 
                  className='nav-links'   
                  onClick={closeMobileMenu}>     
                      Extracurricular
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}