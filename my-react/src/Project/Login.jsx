import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Slider from '../Components/Slider';

const LoginForm = () => {
  return (
    <div className="container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Login</button><br/>
        <Link to="/signup"><button type="submit">Signup</button></Link>
      </form>
      <div className="side-box">
      
      <div className="image-gallery">
        <img src="https://plus.unsplash.com/premium_photo-1661490222612-f6702049e9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvcnBvcmF0ZSUyMGV2ZW50JTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Image 1" />
        
      </div>
 
    
      </div>
      </div>
      );
};

export default LoginForm;
