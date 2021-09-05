import React from 'react';
import './Header.css';
import MyConference from '../../image/myConference.svg';
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';

const Header = () => {
    return (
        <div className='header-background'>
            <img className="header-logo" src={MyConference} />
            <nav className='nav-menu'>
                <a className='nav-menu__link' href="URL">HOME</a>
                <a className='nav-menu__link' href="URL">ROOMS</a>
                <a className='nav-menu__link' href="URL">ABOUT</a>
                <a className='nav-menu__link' href="URL">CONTACT US</a>
            </nav>
            <button className='btn-logOut'>
                <ExitToAppTwoToneIcon
                    style={{
                        color: '#ffffff',
                        fontSize: "3rem",
                    }}
                />
                <span className='btn-logOut__text'>LOG OUT</span>
            </button>
        </div>
    )
}



export default Header