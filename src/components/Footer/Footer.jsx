import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <nav className={styles.nav}>
        <a className={styles.nav__link} href="URL">
          HOME
        </a>
        <a className={styles.nav__link} href="URL">
          ROOMS
        </a>
        <a className={styles.nav__link} href="URL">
          ABOUT
        </a>
        <a className={styles.nav__link} href="URL">
          CONTACT US
        </a>
      </nav>
    </div>
  );
};

export default Footer;
