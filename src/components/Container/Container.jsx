import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Container.module.scss';
import { useLocation } from 'react-router';

const Container = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/' && <Header />}
      <div className={styles.wrapper}>{children}</div>
      {location.pathname !== '/login' && location.pathname !== '/' && <Footer />}
    </>
  );
};

export default Container;
