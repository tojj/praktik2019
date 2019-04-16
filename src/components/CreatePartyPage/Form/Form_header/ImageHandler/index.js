import React from 'react'
import { Image, ArrowDownCircle } from 'react-feather'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import staticData from '../../../../../staticData'



class ImageHandler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {    
      dropdownOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  

  renderImages = ({ id, img, imgClass, dropdownClass }) => {
    return (
      <DropdownItem key={id}  className={dropdownClass}><img className={imgClass} src={img} alt="" /></DropdownItem>
    )
  }

  render() {
    return (

      <div className="imagehandler-container force-top">
        <div className="image-pick-container" >
            <div>
              <p className="image-text">Ladda upp egen bakgrundsbild</p>
              <Image className="img-icon container-image" />
            </div>
        </div>
        <Dropdown className="image-dropdown force-top" isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{ border: 'none', padding: '0' }}>
          <DropdownToggle color="primary">
            Välj bild <ArrowDownCircle />
          </DropdownToggle>
          <DropdownMenu className="dd-menu force-top" style={{ width: '100%', padding: '5px' }}>
            {staticData.imageHandlerData.map(this.renderImages)}
          </DropdownMenu>
        </Dropdown>
      </div>
    )
  }
}

export default ImageHandler


