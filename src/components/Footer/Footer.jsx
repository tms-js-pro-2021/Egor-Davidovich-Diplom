import React from 'react';
import './Footer.module.css';

const Footer = () => {
  return (
    <div className="footer-background">
      <nav className="nav-menu">
        <a className="nav-menu__link" href="URL">
          HOME
        </a>
        <a className="nav-menu__link" href="URL">
          ROOMS
        </a>
        <a className="nav-menu__link" href="URL">
          ABOUT
        </a>
        <a className="nav-menu__link" href="URL">
          CONTACT US
        </a>
      </nav>
    </div>
  );
};

export default Footer;
