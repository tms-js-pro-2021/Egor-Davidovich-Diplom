import React from 'react';
import styles from './Footer.module.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <nav className={styles.nav}>
        <a className={styles.nav__link} href="#">
          HOME
        </a>
        <a className={styles.nav__link} href="#">
          ROOMS
        </a>
        <a className={styles.nav__link} href="#">
          ABOUT
        </a>
        <a className={styles.nav__link} href="#">
          CONTACT US
        </a>
      </nav>
      <p> © 2021 Copyright TMS</p>
      <div class={styles.footer__social}>
        <a href="#" class={styles.social__links}>
          <FacebookIcon class={styles.social__icon} />
        </a>
        <a href="#" class={styles.social__links}>
          <InstagramIcon class={styles.social__icon} />
        </a>
        <a href="#" class={styles.social__links}>
          <LinkedInIcon class={styles.social__icon} />
        </a>
        <a href="#" class={styles.social__links}>
          <TwitterIcon class={styles.social__icon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
