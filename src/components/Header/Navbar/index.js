import React from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import navItems from './navItems.json'

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
    const startPageNav =  navItems.fullNav.map((navItem, i) => {
      return (
        <Link
          spy={true}
          smooth={true}
          duration={500}
          to={navItem.route}
          key={"navitem_" + i}
          className="link-item">{navItem.name}
        </Link>
      )
    })
      
    const smallNav = () => {
      return (
        <div>
          <NavLink
            to={navItems.smallNav[0].route}
            className="link-item">{navItems.smallNav[0].name}
          </NavLink>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to={navItems.smallNav[1].route}
            className="link-item">{navItems.smallNav[1].name}
          </Link>
        </div>
      )
    }
    
    return (
      <nav>
        <div className="burger-menu-btn" onClick={this.toggle}>
          <img src="/images/burger-primary.png" alt="open menu" />
        </div>
        <div className={this.state.burgerOpen ? 'nav-wrapper open' : 'nav-wrapper'}>
          <div>
            <img className="burger-menu-btn" onClick={this.toggle} alt="close menu" src="/images/burger-secondary.png" />
          </div>
          {this.props.showFull ? startPageNav : smallNav}
        </div>
      </nav>
    )
  }
}

export default Navbar