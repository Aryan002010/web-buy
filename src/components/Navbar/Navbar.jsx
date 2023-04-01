import React from 'react'

import { BiBasket } from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import logo from '../../assets/logo.jpg'

import './Navbar.css'

function Navbar() {
  return (
    <nav className='navigation'>

      <div className="box">
        <div className="logo-box">
          <a href="/">
            <img src={logo} alt="logo" className='logo' />
          </a>
        </div>
        <div className="home">
          HOME
        </div>
        <div className="about">
          ABOUT
        </div>
        <div className="track">
          TRACK
          </div>
      </div>

      <div className="manage">

        <a href='/cart' className="cart-icon">
          <BiBasket size={50} />
        </a>

        <a href='/user' className="user-icon">
          <BiUser size={50} />
        </a>

      </div>
    </nav>
  )
}

export default Navbar