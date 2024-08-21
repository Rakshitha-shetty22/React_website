import React from 'react'
import './header.css'
import { CDNURL } from '../../constants/const'
function Header() {
  return (
    <div className='header'>
        <div className='logo-container'>
        <img
          src={CDNURL.LOGO_URL}
          alt="App Logo"
          className="logo"
        />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
    </div>
  )
}

export default Header
