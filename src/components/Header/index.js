import React from "react"
import Navbar from "./Navbar/index"
import ScrollToTop from "react-scroll-up"
import { NavLink } from "react-router-dom"
import GDPR from '../GDPR/index'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gdpr: false,
      scroll: 120
    }
  }
  componentWillMount() {
    const token = localStorage.getItem('gdpr')
    if (token) {
      this.setState({
        gdpr: true,
        scroll: 20
      })
    } else {
      this.setState({
        gdpr: false,
        scroll: 120
      })
    }
  }
  gdprToggle = () => { 
    this.setState({
      gdpr: true,
      scroll: 20
    })
  }

  render() {
    return (
      <div className="header-wrapper" id="header">
        <ScrollToTop style={{ zIndex: 99, bottom: this.state.scroll, right: 20 }} showUnder={500}>
          <img className="arrow-img" src="/images/general/arrow.png" alt="back to top" />
        </ScrollToTop>
        <GDPR toggle={this.gdprToggle} />
        <Navbar showFull={this.props.startPage} />
        <NavLink
          className="logo-holder"
          exact
          to="/"
          activeStyle={{ opacity: 1 }}>
          Tojj
      </NavLink>
      </div>
    )
  }
}

export default Header
