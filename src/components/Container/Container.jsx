import React from 'react';
import Header from '../Header';
import './Container.css'





const Container = ({ children }) => {
    return (
        <>
        <Header />
        <div className="wrapper">
            {children}
        </div>
        </>
    )
}


export default Container;