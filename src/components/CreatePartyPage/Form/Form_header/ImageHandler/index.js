import React from 'react'
import { Image, ArrowDownCircle } from 'react-feather'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


class ImageHandler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
      imgSrc: '/images/arrow.png',
      dropdownOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }
  test = (e) => {
    console.log(e.target.src);

    this.setState({
      selected: true,
      imgSrc: e.target.src
    })

  }

  render() {
    return (
      <div className="imagehandler-container">
        <h2 className="image-headline">Välj bakgrundsbild till kalaset</h2>
        <div className="image-pick-container" style={this.state.selected ? {background: 'url(' + this.state.imgSrc + ')'} : {background: '#fff'}}>
          
          {!this.state.selected ?
            <div>
              <p className="image-text">Ladda upp egen bild</p> 
              <Image className="img-icon container-image" />
            </div>
            : null
          }
        </div>
        <Dropdown className="image-dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle>
            Våra urval <ArrowDownCircle />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.test} className="dd-item"><img className="dd-image" src="/images/patterns/cake.jpg" alt="asdad" /></DropdownItem>
            <DropdownItem onClick={this.test} className="dd-item"><img className="dd-image" src="/images/patterns/camo.jpg" alt="asdad" /></DropdownItem>
            <DropdownItem onClick={this.test} className="dd-item"><img className="dd-image" src="/images/patterns/heart.png" alt="asdad" /></DropdownItem>
            <DropdownItem onClick={this.test} className="dd-item"><img className="dd-image" src="/images/patterns/blue.jpg" alt="asdad" /></DropdownItem>
            <DropdownItem onClick={this.test} className="dd-item"><img className="dd-image" src="/images/patterns/leaf.png" alt="asdad" /></DropdownItem>
            <DropdownItem onClick={this.test} className="dd-item"><img className="dd-image" src="/images/patterns/navy.jpg" alt="asdad" /></DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}
export default ImageHandler


