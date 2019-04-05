import React from 'react'
import { Link } from 'react-scroll'
// import { NavLink } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      burgerOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      burgerOpen: !this.state.burgerOpen
    })
  }
  render() {
    return (
      <div>
        <nav>
          <div className="burger-menu-btn" onClick={this.toggle}>
            <img src="/images/burger-primary.png" alt="open menu" />
          </div>
          <div className={this.state.burgerOpen ? 'nav-wrapper open' : 'nav-wrapper'}>
            <div>
              <img className="burger-menu-btn" onClick={this.toggle} alt="close menu" src="/images/burger-secondary.png" />
            </div>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="prodinfo-container"
              className="link-item">tojj
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="convincer-container"
              className="link-item">Varför?
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              role="link"
              to="about-container"
              className="link-item">Om oss
            </Link>
            <Link
              spy={true}
              smooth={true}
              duration={500}
              to="contact-us"
              className="link-item">Kontakt
            </Link>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar