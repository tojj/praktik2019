import React from 'react'
import Navbar from './Navbar/index'

const Header = () => {
  return (
    <div className="header-wrapper">
      <Navbar />
      <div className="logo-holder">
        <img src="/images/vojj-logo.png" className="logo-img" alt="logo" />
      </div>
    </div>
  )
}

export default Header