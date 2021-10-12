import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <nav className={styles.nav}>
        <Link to="/#" className={styles.nav__link}>
          HOME
        </Link>
        <Link to="/#" className={styles.nav__link}>
          ROOMS
        </Link>
        <Link to="/#" className={styles.nav__link}>
          ABOUT
        </Link>
        <Link to="/#" className={styles.nav__link}>
          CONTACT US
        </Link>
      </nav>
      <p className={styles.footer__copyright}> © 2021 Copyright TMS</p>
      <div>
        <Link to="/#" className={styles.social__links}>
          <FacebookIcon fontSize="large" />
        </Link>
        <Link to="/#" className={styles.social__links}>
          <InstagramIcon fontSize="large" />
        </Link>
        <Link to="/#" className={styles.social__links}>
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link to="/#" className={styles.social__links}>
          <TwitterIcon fontSize="large" />
        </Link>
      </div>
    </div>
  )
}

export default Footer
