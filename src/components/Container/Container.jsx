import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import styles from './Container.module.scss'

const Container = ({ children }) => {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/login' && <Header />}
      <div className={styles.wrapper}>{children}</div>
      {location.pathname !== '/login' && <Footer />}
    </>
  )
}

export default Container
