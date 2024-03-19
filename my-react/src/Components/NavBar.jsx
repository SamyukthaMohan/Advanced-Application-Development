import React from 'react';
import './NavBar.css'; // Import CSS file for styling
import Images from '../Images/logo.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      <img className='nav_imagelogo' src={Images}></img>
      <h2 className='nav_title'>BIZGather</h2>

      </div>
      <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/signup">Signup</a></li>
      </ul>
      </nav>
      );
    }

export default NavBar;

  