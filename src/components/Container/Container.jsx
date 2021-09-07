import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './Container.module.css';

const Container = ({ children }) => {
  return (
    <>
      <Header />
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
};

export default Container;
