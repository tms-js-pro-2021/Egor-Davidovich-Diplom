import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone'
import MyConference from '../../../public/image/myConference.svg'
import styles from './Header.module.scss'
import NavMenu from '../../containers/NavMenu'

const Header = () => {
  const history = useHistory()

  const handleLogIn = () => {
    history.replace('/login')
  }

  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.header__logo} alt="logo" src={MyConference} />
      </Link>
      <nav className={styles.nav}>
        <a className={styles.nav__link} href="/#">
          HOME
        </a>
        <a className={styles.nav__link} href="/#">
          ROOMS
        </a>
        <a className={styles.nav__link} href="/#">
          ABOUT
        </a>
        <a className={styles.nav__link} href="/#">
          CONTACT US
        </a>
      </nav>
      <MediaQuery maxWidth={768}>
        <NavMenu handleLogIn={handleLogIn} />
      </MediaQuery>
      <button
        type="button"
        onClick={handleLogIn}
        className={styles.button__login}
      >
        <ExitToAppTwoToneIcon
          style={{
            fontSize: '3rem',
          }}
        />
        <span className={styles.button__login__text}>LOG IN</span>
      </button>
    </div>
  )
}

export default Header
