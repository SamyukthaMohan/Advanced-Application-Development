import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserNav.css'; 
import Images from '../Images/logo.png';


const pages = ['Dashboard', 'All Events', 'My Bookings', 'My Payments'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function UserNav() {
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  const closeUserMenu = () => {
    setUserMenuOpen(false);
  };

  return (
    <nav className="user_navbar">
      <div className="user_navbar-logo">
        <Link to="/home" className="user_logo-link"><img src={Images} alt="logo" className='llogo'></img>
        </Link>
      </div>
      <div className="user_navbar-links">
        <ul className="user_menu">
          {pages.map((page) => (
            <li key={page}>
              <Link to={`/${page.replace(/\s+/g, '').toLowerCase()}`} className="user_menu-item">{page}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="user_user-profile">
        <Link to="/login"><button className="user_user-toggle" onClick={toggleUserMenu}>
          Logout
        </button></Link>
        </div>
        </nav>
  );
}

export default UserNav;
        // <ul className={`user-menu ${isUserMenuOpen ? 'open' : ''}`}>
        //   {settings.map((setting) => (
        //     <li key={setting} onClick={closeUserMenu}>
        //       <Link to={`/${setting.toLowerCase()}`} className="user-menu-item">{setting}</Link>
        //     </li>
        //   ))}
        // </ul>