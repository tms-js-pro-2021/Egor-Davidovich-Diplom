import React from 'react';
import { useHistory } from 'react-router';
import styles from './Header.module.scss';
import MyConference from '../../image/myConference.svg';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

const Header = () => {
  let history = useHistory();

  const handleLogOut = () => {
    console.log('sdasd');
    history.replace('./login');
  };

  return (
    <div className={styles.header}>
      <img className={styles.header__logo} src={MyConference} />
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
      <button onClick={handleLogOut} className={styles.button__logout}>
        <ExitToAppTwoToneIcon
          style={{
            fontSize: '3rem',
          }}
        />
        <span className={styles.button__logout__text}>LOG OUT</span>
      </button>
    </div>
  );
};

export default Header;
