import React from 'react';
import './NavBar.css'; // Import CSS file for styling
//import Images from './Images/logo.png'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
      
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

    // <div className="auth-buttons">
    //   <button className="login-button">Login</button>
    //   <button className="signup-button">Sign Up</button>
    // </div>