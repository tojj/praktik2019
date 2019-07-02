import React from "react"
import axios from 'axios'
import Checkout from "../Form_footer/Checkout/index"
import { connect } from 'react-redux'
import { doUpdateFundraiser } from '../../../../store/Birthday/BirthdayActions'

class Form_footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      charitySelected: false,
      sliderContent: "",
      charityPicked: false,
      selectedCharity: '',
      allCharityData: '',
    }
    this.allFundraisersData = []
    this.allFundraisers = []
    this.fundraiserId = ""
    this.selectedFundraiser = ""
    this.loadData()
  }

  componentDidMount() {
    this.chosenFundRaiserField()
    this.clickedFundraiser()
    
  }

  clickedFundraiser(){
    if (this.props.fundraiser.id) {
      console.log(this.props.fundraiser.donate)
      this.toggleSelected(this.props.fundraiser.id)
      this.toggleSelectBorder(this.props.fundraiser.id)
      this.toggleSelectOverlay(this.props.fundraiser.id)
    }
  }

  async loadData() {
    this.allCharityData = await axios({
      method: 'get',
      url: '/api/fundraisers'
    })
    this.allCharityData = this.allCharityData.data
    this.setState({ allCharityData: this.allCharityData })
  }

  chosenFundRaiserField() {
    if (this.props.fundraiser.donate === true) {
      this.setState({ charitySelected: true })
      this.props.updateSelectedFundraiser(
        {
          buttonSelected: true,
          donate: true
        })
    } else if (this.props.fundraiser.donate === false && this.props.fundraiser.buttonSelected === true) {
      this.setState({ charityPicked: true })
    }
  }

  selected = (e) => {
    this.setState({ charitySelected: true, charityPicked: false })
    this.props.updateSelectedFundraiser(
      {
        buttonSelected: true,
        donate: true
      })

  }

  notSelected = (e) => {
    this.setState({ charitySelected: false, charityPicked: true })
    this.props.updateSelectedFundraiser(
      {
        buttonSelected: true,
        donate: false,
        id: '',
      })
  }

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

    fundraiser = this.props.fundraiser
    this.setState({ charitySelected: true })

  }

  toggleSelectOverlay(id) {
    const isItemSelected = this.state.selectedCharity === id
    return isItemSelected
      ? "charity-checkmark charity-overlay"
      : "placeholder-div"
  }

  toggleSelectBorder(id) {
    const isItemSelected = this.state.charitySelected === id
    return isItemSelected ? "" : "fundraiserWidth"
  }

  toggleSelected(id) {
    
    if (this.state.selectedCharity === id) {
      this.setState({ selectedCharity: "" })
    } else {
      this.setState({ selectedCharity: id })
    }
    this.fundraiserId = id
    this.getSelectedFundraiser()
    
    
  }

  renderCharity() {
    return this.allCharityData.map((charity, id) => {
      return (
        <div className={this.toggleSelectBorder(charity._id)} key={id}>
          <div
            className={this.toggleSelectOverlay(charity._id)}
            onClick={() => this.toggleSelected(charity._id)}
          />
          <img
            className="charImg"
            src={charity.image}
            alt={charity.name}
            id={charity._id}
            onClick={() => this.toggleSelected(charity._id)}
          />
        </div>
      )
    })
  }

  render() {
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
                  checked={this.state.charitySelected}
                  readOnly
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
                  readOnly
                  checked={this.state.charityPicked}
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
              {this.state.allCharityData ?
                <div className="fundraiser-container">{this.renderCharity()}</div>
              : <div></div>}
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



