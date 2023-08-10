import React from 'react';
import "./style.css";

const Menu = () => {
  return (
    <div className='menu-wrapper'>
        <a href='/'>
            Home
        </a>
        <a href='/dashboard'>
            Dashboard
        </a>
        <a href='/about'>
            About Us
        </a>
        <a href='/contact'>
            Contact Us
        </a>
    </div>
  )
}

export default Menu