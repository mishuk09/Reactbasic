import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';

const Header = () => {
    return (
        <nav className='header'>
             <img src={logo} alt="" />
             <div className=''>
                <a href="">HOME</a>
                <a href="">ORDERS</a>
                <a href="">INVENTORY</a>
                <a href="">ABOUT</a>
             </div>
        </nav>
    );
};

export default Header;