import React from "react"
import { Link } from "react-scroll"
import { NavLink } from "react-router-dom"
import navItems from "./navItems.json"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      burgerOpen: false
    }
  }

  toggle = () => {
    this.setState({
      burgerOpen: !this.state.burgerOpen
    })
  }
  burgerClose = () => {
    this.setState({
      burgerOpen: false
    })
  }
  componentDidUpdate() {
    let main = document.getElementById("main")
    if (this.state.burgerOpen) {
      main.addEventListener("click", this.burgerClose)
    } else {
      main.removeEventListener("click", this.burgerClose)
    }
  }

  render() {
    const startPageNav = navItems.fullNav.map((navItem, i) => {
      return (
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to={navItem.route}
          key={"navitem_" + i}
          onClick={this.state.burgerOpen ? this.toggle : null}
          className="link-item"
        >
          {navItem.name}
        </Link>
      )
    })

    const smallNav = (
      <div className="naver">
        <NavLink
          to={navItems.smallNav[0].route}
          exact
          onClick={this.state.burgerOpen ? this.toggle : null}
          activeStyle={{opacity: 1}}
          className="link-item"
        >
          {navItems.smallNav[0].name}
        </NavLink>
        <NavLink
          to={navItems.smallNav[1].route}
          onClick={this.state.burgerOpen ? this.toggle : null}
          activeStyle={{opacity: 1}}
          className="link-item"
        >
          {navItems.smallNav[1].name}
        </NavLink>
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to={navItems.smallNav[2].route}
          onClick={this.state.burgerOpen ? this.toggle : null}
          className="link-item"
        >
          {navItems.smallNav[2].name}
        </Link>
      </div>
    )

    return (
      <nav>
        <div className="burger-holder">
          <img
            className="burger-menu-btn"
            onClick={this.toggle}
            alt="toggle menu"
            src="/images/general/burger-secondary.png"
          />
        </div>
        <div
          className={this.state.burgerOpen ? "nav-wrapper open" : "nav-wrapper"}
        >
          <div className="burger-holder" />
          {this.props.showFull ? startPageNav : smallNav}
          {this.props.showFull
            ? <NavLink
              to={navItems.smallNav[1].route}
              onClick={this.state.burgerOpen ? this.toggle : null}
              activeStyle={{opacity: 1}}
              className="link-item"
            >
              {navItems.smallNav[1].name}
            </NavLink>
            : null}
        </div>
      </nav>
    )
  }
}

export default Navbar
