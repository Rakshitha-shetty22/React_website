import React, { useState } from 'react'
import './header.css'
import { CDNURL } from '../../constants/const'
function Header() {
  const [btn, setBtn] = useState("Login");
  const handleButton = () =>  {
    btn === "Login" ? setBtn("Logout") : setBtn("Login");
  }
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
            <button className='login' onClick={handleButton}>{btn}</button>
          </ul>
        </div>
    </div>
  )
}

export default Header
//so whenever we click on the btn this whole Header component will re-render and diff algorithum finds the change in only btn 
//so diff will update the button when its rerendering.