// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './SideBar.css'

function SideBar() {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/admin/products">Products</Link></li>
        {/* Add more list items for other menu options */}
      </ul>
    </div>
  );
}

export default SideBar;
