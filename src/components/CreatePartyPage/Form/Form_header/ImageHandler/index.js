import React from 'react'
import { Image, ArrowDownCircle } from 'react-feather'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import staticData from '../../../../../staticData'
import { connect } from 'react-redux'
import { updateImage } from '../../../../../store/Birthday/BirthdayActions'



class ImageHandler extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdownOpen: false
    }

  }


  /**
   * Toggle method for dropdown button.
   */

  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen

    }))
  }

  /** 
   * Curry function som gör så att den bild man klickar på 
   * själva url till bild blir redux state.
   */

  updateImg = (imgUrl) => () => {
    this.props.updateImg(imgUrl)

  }

  renderImages = ({ id, img, imgClass, dropdownClass }) => {
    return (
      <DropdownItem
        key={id}
        className={dropdownClass}
      >
        <img className={imgClass} src={img} alt="" onClick={this.updateImg(img)} />
      </DropdownItem>
    )
  }

  /**
   * Conditional rendering
   * Renderar och använder den i min JSX
   * Alla turnary operators osv ska göras utanför JSX
   */


  renderSelectedBgImg = () => this.props.birthdayImage
    ? <img src={this.props.birthdayImage} alt=""/>
    : (
      <div>
        <p className="image-text">Välj bakgrundsbild</p>
        <Image className="img-icon container-image" size={48} />
      </div>
    )

  render() {
    return (

      <div className="imagehandler-container force-top">
        <div className="image-pick-container">

          {this.renderSelectedBgImg()}

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

const mapDispatchToProps = dispatch => ({
  updateImg: data => dispatch(updateImage(data))
})

const mapStateToProps = state => {
  return {
    birthdayImage: state.birthday.birthdayImage

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ImageHandler)


