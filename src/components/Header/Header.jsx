import React from 'react';
import logo from "../../images/Logo.svg";
import "./Header.css";


const Header = () => {
    return (
        <div className='nav'>
            <img src={logo} alt=""  />
            <div className='link'>
                <a href="/order">Order</a>
                <a href="/description">Description</a>
                <a href="/other">Another Page</a>
                <a href="/about">About</a>
            </div>
        </div>
    );
};

export default Header;