import React from 'react'
import Navbar from './Navbar/index'
// import Navbar from './Navbar/index'

const Header = () => (
  <div className="header-wrapper">
    
    <div className="logo-holder">
      <Navbar />
      <img src="/images/vojj-logo.png" className="img-fluid" alt="logo" />
    </div>
  </div>
)

export default Header