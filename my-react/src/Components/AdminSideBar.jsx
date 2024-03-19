import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminSideBar.css';

function AdminSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'show' : ''}`}>
      <div className="dinoside_hamburger-menu" onClick={toggleSidebar}>
        <div className="dinoside_line"></div>
        <div className="dinoside_line"></div>
        <div className="dinoside_line"></div>
      </div>
      <Link to="/hh">Home</Link>
      <Link to="/event">Events</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default AdminSideBar;