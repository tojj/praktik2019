import React from "react"
import Slider from "react-slick"
import Checkout from "../Form_footer/Checkout/index"
import FUNDRAISER from "../../../../REST/FUNDRAISER"
import { connect } from 'react-redux'
import { doUpdateFundraiser } from '../../../../store/Birthday/BirthdayActions'


class Fundraiser extends FUNDRAISER { }

class Form_footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      charitySelected: false,
      sliderContent: "",
      sliderVal: 0
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

    console.log(e.target.id, "you clicked n")
  }

  async setDefaultFundraiser() {
    const firstFundraiser = await Fundraiser.find(`.find().limit(1).exec()`)

    const fundraiser = {
      id: firstFundraiser[0]._id,
      name: firstFundraiser[0].name,
      image: firstFundraiser[0].image,
      link: firstFundraiser[0].link,

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
    console.log(e.target.id, "you clicked n")
  }

  testing = (e) => { 
    let val = document.getElementById('val').offsetWidth;
    let percentage = Math.round(val / 518 * 100)
    this.setState({sliderVal: percentage})
  }

  async loadFundraisersAndMount() {
    this.allFundraisersData = await Fundraiser.find()
    this.allFundraisers = this.allFundraisersData.map((fundraiser, i) => {
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
    this.selectedFundraiser = await Fundraiser.find(`.find({ _id: '${this.fundraiserId}' })`)
    let fundraiser = {
      id: this.selectedFundraiser[0]._id,
      name: this.selectedFundraiser[0].name,
      image: this.selectedFundraiser[0].image,
      link: this.selectedFundraiser[0].link,
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
                Vad vill du göra med överskott?
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
                  Ge till välgörenhet
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
                  Sätta in på sparkonto
                </label>
              </div>
              <div className="input-group">
                <input
                  className="radio-input"
                  id="radio3"
                  name="radioCharity"
                  type="radio"
                  onClick={
                    this.selected
                  }
                />
                <label className="radio-label" htmlFor="radio3">
                  Båda
                </label>
              </div>
              <div className="select-slider">
                <div className="select-slider-div" id="val" onMouseMove={this.testing}>
                  <div className="cursor-div"></div>
                </div>
              </div>
              <label>{this.state.sliderVal}</label>
              <label className="float-right">{100-this.state.sliderVal}</label>
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



