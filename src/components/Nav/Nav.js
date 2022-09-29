import React from 'react';
import logo from "../../logo2.png";
import "./Nav.css";
const Nav = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <h2><span style={{color: "#3298ff"}}>Study</span> Online</h2>
        </nav>
    );
};

export default Nav;