import React from 'react'
import Navbar from './Navbar/index'
// import Navbar from './Navbar/index'

const Header = () => {
  return (
    <div className="header-wrapper">
      <Navbar />
      <div className="logo-holder">
        <img src="/images/vojj-logo.png" className="img-fluid" alt="logo" />
      </div>
      <nav className="nav-big">

      </nav>
    </div>
  )
}

export default Header