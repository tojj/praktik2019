import React from "react"
import axios from 'axios'
import Slider from "react-slick"
import Checkout from "../Form_footer/Checkout/index"
import { connect } from 'react-redux'
import { doUpdateFundraiser } from '../../../../store/Birthday/BirthdayActions'

class Form_footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      charitySelected: false,
      sliderContent: ""
    }
    this.allFundraisersData = []
    this.allFundraisers = []
    this.loadFundraisersAndMount()
    this.setDefaultFundraiser = this.setDefaultFundraiser.bind(this)
    this.setDefaultFundraiser()
    this.fundraiserId = ""
    this.selectedFundraiser = ""
  }

  selected = (e) => {
    this.setState({ charitySelected: true })
    this.props.updateSelectedFundraiser(
      {
        buttonSelected: true,
        donate: true
      })
  }

  async setDefaultFundraiser() {
    let firstFundraiser = await axios({
      method: 'get',
      url: '/api/fundraisers/first'
    })
    firstFundraiser = firstFundraiser.data
    const fundraiser = {
      id: firstFundraiser._id,
      name: firstFundraiser.name,
      image: firstFundraiser.image,
      link: firstFundraiser.link,

    }
    this.props.updateSelectedFundraiser(
      fundraiser
    )
  }

  notSelected = (e) => {
    this.setState({ charitySelected: false })
    this.props.updateSelectedFundraiser(
      {
        buttonSelected: true,
        donate: false
      })
  }

  async loadFundraisersAndMount() {
    this.allFundraisersData = await axios({
      method: 'get',
      url: '/api/fundraisers'
    })
    this.allFundraisers = this.allFundraisersData.data.map((fundraiser, i) => {
      return (
        <div className="slider-div" key={"fundraiser_" + i}>
          <div className="charity-overlay" />
          <div className="charity-checkmark" />
          <img
            className="charImg"
            src={fundraiser.image}
            alt={fundraiser.name}
            id={fundraiser._id}
            onClick={this.findFundraisersId}
          />
        </div>
      )
    })
    this.setState({ sliderContent: this.allFundraisers })
  }

  /**
  * Getting selected Fundraiser
  */

  findFundraisersId = (e) => {
    const selectedId = e.target.id
    this.fundraiserId = selectedId
    this.getSelectedFundraiser()

  }

  /**
   * Searching for the selected Fundraiser in the
   * database and updating Redux state
   */

  async getSelectedFundraiser() {
    this.selectedFundraiser = await axios({
      method: 'get',
      url: `/api/fundraisers/id/${this.fundraiserId}`
    })

    this.selectedFundraiser = this.selectedFundraiser.data

    let fundraiser = {
      id: this.selectedFundraiser._id,
      name: this.selectedFundraiser.name,
      image: this.selectedFundraiser.image,
      link: this.selectedFundraiser.link,
      donate: true
    }
    this.props.updateSelectedFundraiser(
      fundraiser
    )
  }


  render() {
    const settings = {
      dots: true,
      focusOnSelect: true,
      infinite: true,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 595,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    }

    return (
      <div className="form-footer-container">
        <div className="box-container">
          <div className="box align-left">
            <div className="form">
              <h2 className="form-headline text-center">
                Vill du stödja en välgörenhet?
              </h2>
              <div className="input-group">
                <input
                  className="radio-input"
                  id="radio1"
                  name="radioCharity"
                  type="radio"
                  onClick={
                    this.selected
                  }
                />
                <label className="radio-label" htmlFor="radio1">
                  Ja, det vill jag
                </label>
              </div>
              <div className="input-group">
                <input
                  className="radio-input"
                  id="radio2"
                  name="radioCharity"
                  type="radio"
                  onClick={
                    this.notSelected
                  }
                />
                <label className="radio-label" htmlFor="radio2">
                  Nej tack
                </label>
              </div>
            </div>
          </div>
        </div>
        {this.state.charitySelected ? (
          <div>
            <h2 className="form-headline charity-headline text-center">
              Välj välgörenhet
            </h2>
            <div className="slider-container">
              <div className="slider-content">
                <Slider {...settings}>{this.state.sliderContent}</Slider>
              </div>
            </div>
          </div>
        ) : null}
        <Checkout />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fundraiser: state.birthday.fundraiser
  }
}

const mapDispatchToProps = dispatch => ({
  updateSelectedFundraiser: (data) => dispatch(doUpdateFundraiser(data))
})




export default connect(mapStateToProps, mapDispatchToProps)(Form_footer)



