import React from "react"
import Navbar from "./Navbar/index"
import ScrollToTop from "react-scroll-up"
import { NavLink } from "react-router-dom"

const Header = props => {
  return (
    <div className="header-wrapper" id="header">
      <ScrollToTop style={{ zIndex: 99 }} showUnder={500}>
        <img className="arrow-img" src="/images/arrow.png" alt="back to top" />
      </ScrollToTop>
      <Navbar showFull={props.startPage} />
      <NavLink className="logo-holder" to="/">
        <img src="/images/tojj-logo2.png" className="logo-img" alt="logo" />
      </NavLink>
    </div>
  )
}

export default Header
