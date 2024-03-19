// Footer.js

import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div className="social-media-icons">
          <FacebookIcon/>
          <InstagramIcon/>
          <WhatsAppIcon/>
          <TwitterIcon/>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
