// SignupForm.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSignup = () => {
    // Here you can implement your signup logic
    console.log('Signing up with:', username, email, password, confirmPassword, role);
  };

  return (
    <div>
    <img className='signup_img' src='https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV2ZW50JTIwbGlnaHR8ZW58MHx8MHx8fDA%3D'></img>
    <div className="signup_container">
      <form className="signup-form" onSubmit={handleSignup}>
        <h2>Signup</h2>
        <div className="signup_form-group">
          <label>Username:</label>
          <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="signup_form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="signup_form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="signup_form-group">
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="signup_form-group">
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
       <Link to="/dashboard"> <button type="submit">Signup</button></Link>
      </form>
      <p className='back_log'>Already have an account? <Link to="/login">Login</Link></p>
    </div>
    </div>
  );
};

export default Signup;
