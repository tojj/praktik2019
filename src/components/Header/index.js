import React from "react"
import Navbar from "./Navbar/index"
import ScrollToTop from "react-scroll-up"
import { NavLink } from "react-router-dom"
import GDPR from '../GDPR/index'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      gdpr: <ScrollToTop style={{ zIndex: 99, bottom: 120, right: 20 }} showUnder={500}>
        <img className="arrow-img" src="/images/general/arrow.png" alt="back to top" />
      </ScrollToTop>
    }
  }

  componentDidMount() {
    const gdpr = localStorage.getItem('gdpr')
      if (gdpr) {
      this.setState({ gdpr: <ScrollToTop style={{ zIndex: 99, bottom: 120, right: 20 }} showUnder={500}>
        <img className="arrow-img" src="/images/general/arrow.png" alt="back to top" />
      </ScrollToTop> })
    } else {
      return
    }
  }

  gdprToggle = () => {
    if (!this.state.gdpr) {
      this.setState({ gdpr: <ScrollToTop style={{ zIndex: 99, bottom: 120, right: 20 }} showUnder={500}>
        <img className="arrow-img" src="/images/general/arrow.png" alt="back to top" />
      </ScrollToTop> })
      console.log('jesper test')
    }
  }

  render() {
    return (
      <div className="header-wrapper" id="header">
        {this.state.gdpr}
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
