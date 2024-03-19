import React, { useState } from 'react';
import './AdminLogin.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  

  return (
    <div className="admin-login">
      <form>
        <h2>Admin Login</h2>
        
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password}  />

        <Link to="/admindash"><button type="submit">Login</button></Link>
      </form>
    </div>
  );
}

export default AdminLogin;
