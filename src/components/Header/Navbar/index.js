import React from 'react'
import {
  NavLink
} from 'react-router-dom'

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
          <div className="burger-menu" onClick={this.toggle}>
            <img src="/images/burger-primary.png" alt="open menu" />
          </div>
          <div className={this.state.burgerOpen ? 'nav-burger-wrapper open' : 'nav-burger-wrapper'}>
            <div>
              <img className="burger-menu" onClick={this.toggle} alt="close menu" src="/images/burger-secondary.png" />
            </div>
            <NavLink to="#eye-catcher" className="link-item">Vojj</NavLink>
            <NavLink to="#convincer" className="link-item">Varför?</NavLink>
            <NavLink to="#about-container" className="link-item">Om oss</NavLink>
            <NavLink to="#contact-us" className="link-item">Kontakt</NavLink>
          </div>

        </nav>
      </div>
    )
  }
}

export default Navbar