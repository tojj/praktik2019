import React from 'react'
import Navbar from './Navbar/index'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header-wrapper">
      <Navbar />
      <NavLink className="logo-holder" to="/">
        <img src="/images/vojj-logo.png" className="logo-img" alt="logo" />
      </NavLink>
    </div>
  )
}

export default Header