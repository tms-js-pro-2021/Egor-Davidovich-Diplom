import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Container.module.scss';

const Container = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
};

export default Container;
