import React from 'react';
import styles from './Header.module.scss';
import MyConference from '../../image/myConference.svg';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

const Header = () => {
  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src={MyConference} />
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
      <button className={styles.button__logout}>
        <ExitToAppTwoToneIcon
          style={{
            color: '#ffffff',
            fontSize: '3rem',
          }}
        />
        <span className={styles.button__logout__text}>LOG OUT</span>
      </button>
    </div>
  );
};

export default Header;
