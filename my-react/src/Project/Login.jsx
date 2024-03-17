import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Slider from '../Components/Slider';
  const LoginForm = () => {

    
    const images = [
      'https://images.unsplash.com/photo-1583799017856-7b1d93aa56fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NzkzNDQ1fHxlbnwwfHx8fHw%3D',
      'https://images.unsplash.com/photo-1603195827187-459ab02554a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
      'https://images.unsplash.com/photo-1525095182007-3874c4e2b38b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlJTIwZXZlbnQlMjBtYW5hZ2VtZW50fGVufDB8fDB8fHww'
      // Add more image URLs as needed
    ];
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
        <Link to="/signup"><button type="submit" >Signup</button></Link>
        <div>
       <a href='https://developers.google.com/identity/branding-guidelines' target='_blank'> <img className='google_signin' src='https://onymos.com/wp-content/uploads/2020/10/google-signin-button-1024x260.png'/></a>
        </div>
        <p className='forgot'>Forgot email or trouble signing in?<Link to='/signup'> Get help</Link>.</p>
      </form>
      <div className="side-box">
      <Slider images={images}/>
      </div>
      </div>
      );
};

export default LoginForm;
















      // <div className="image-gallery">
      //   <img src="https://plus.unsplash.com/premium_photo-1661490222612-f6702049e9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvcnBvcmF0ZSUyMGV2ZW50JTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Image 1" />
        
      // </div>