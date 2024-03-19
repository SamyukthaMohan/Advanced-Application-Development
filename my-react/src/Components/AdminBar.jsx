// AdminPage.js

import React, { useEffect, useState } from 'react';
import './AdminBar.css';
import { Link } from 'react-router-dom';

function AdminBar() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const openSidebar = () => {
  //   setSidebarOpen(true);
  // };

  // const closeSidebar = () => {
  //   setSidebarOpen(false);
  // };

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Add event listener to close sidebar when tapping outside of it
    function handleClickOutside(event) {
      if (sidebarOpen && !event.target.closest('.sidebar') && !event.target.closest('.navbar-toggle')) {
        setSidebarOpen(false);
      }
    }
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [sidebarOpen]);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar_admin">
        <div className="navbar-container">
          <div className="navbar-logo">
            Admin Panel
          </div>
          <div className="navbar-menu">
            <button className="navbar-toggle" onClick={toggleSidebar}>
              &#9776;
            </button>
            <Link to="/login"><button className="navbar-logout">
              LogOut
            </button></Link>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        
        <ul className="sidebar-menu">
        <Link to="/view"><li className="sidebar-menu-item">Show Booking</li></Link>
        <Link to="/list"> <li className="sidebar-menu-item">View Events</li></Link>
        <Link to="/addevent"> <li className="sidebar-menu-item">Post New One</li></Link>
        <Link to="/editevent"><li className="sidebar-menu-item">Edit List</li></Link>  
          <li className="sidebar-menu-item">Delete List</li>
          
          
          {/* Add more menu items as needed */}
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
      {/* Add your main content here */}
      </div>
      </div>
  );
}

export default AdminBar;
      // <img  className="admin_img1" src='https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
