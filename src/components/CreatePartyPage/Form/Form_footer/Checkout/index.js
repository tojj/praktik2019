import React from "react"
import { Button, FormGroup, Label } from "reactstrap"
import { doUpdateGuestDetails } from "../../../../../store/Birthday/BirthdayActions"
import RegisterComponent from "../Checkout/RegisterComponent"
import LoginComponent from "../Checkout/LoginComponent"
import { connect } from "react-redux"
import { HelpCircle } from "react-feather"
import InputEvent from "../../Form_body/Event_input/InputEvent"
import { guestUserData } from "../../../../../staticData"
import { NavLink, Link } from "react-router-dom";

class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginOption: false,
      noRegisterOption: false,
      userLogin: false
    }
  }

  /** 
   * Toggling between Login Component, Register Component and Guest User Component
   */

  loginToggle = () => {
    this.setState({
      loginOption: true,
      noRegisterOption: false,
      userLogin: false
    })
  }

  registerToggle = () => {
    this.setState({
      noRegisterOption: true,
      loginOption: false,
      userLogin: false
    })
  }

  userLoginToggle = () => {
    this.setState({
      userLogin: !this.state.userLogin,
      loginOption: false,
      noRegisterOption: false
    })
  }


  /** 
   * Getting input value and rendering inputs
   */

  updateInfo = event => {
    this.props.updateInfo(event.target.value)
  }

  renderInputs = () =>
    this.props.guestUser
      ? Object.keys(this.props.guestUser).map(this.renderInput)
      : null

  renderInput = key => {
    if (key === "phoneNumber") {
      return (
        <FormGroup key="phoneNumber" className="input50">
          <Label
            htmlFor="phoneNumber-input"
            className="position-relative ml-lg-2"
            title="Ange ditt telefonnummer om du vill få sms aviseringar"
          >
            Telefonnummer
            <HelpCircle className="iconFeather" />
          </Label>
          <InputEvent
            name={guestUserData[key].name}
            keyVal={key}
            value={this.props.guestUser[key]}
            type={guestUserData[key].type}
            placeholder={guestUserData[key].label}
            className={guestUserData[key].className}
            callback={this.callback}
          />
        </FormGroup>
      )
    }
    return (
      <FormGroup key={key} className={guestUserData[key].classNameFormGroup}>
        <Label
          htmlFor={guestUserData[key].id}
          className={guestUserData[key].classNameLabel}
        >
          {guestUserData[key].label}
        </Label>
        <InputEvent
          name={guestUserData[key].name}
          keyVal={key}
          value={this.props.guestUser[key]}
          type={guestUserData[key].type}
          placeholder={guestUserData[key].label}
          className={guestUserData[key].className}
          callback={this.callback}
        />
      </FormGroup>
    )
  }

  callback = (value, key) => this.props.updateInfo({ [key]: value })

  render() {
    return (
      <div className="box-details-container" id="checkout-container">
        <div className="box align-left">
          <div className="form">
            <h2 className="form-headline text-center">Slutför</h2>
            <div className="input-group">
              <input
                className="radio-input"
                id="radio3"
                name="radio"
                type="radio"
                onClick={this.userLoginToggle}
              />
              <label className="radio-label" htmlFor="radio3">
                Fortsätt som inloggad användare
              </label>
            </div>
            <div className="input-group">
              <input
                className="radio-input"
                id="radio4"
                name="radio"
                type="radio"
                onClick={this.registerToggle}
              />
              <label className="radio-label" htmlFor="radio4">
                Fortsätt utan inloggning
              </label>
            </div>
          </div>
        </div>

        {this.state.userLogin ? (
          <LoginComponent
            userLoginToggle={this.userLoginToggle}
            loginToggle={this.loginToggle}
          />
        ) : null}

        {this.state.loginOption ? (
          <RegisterComponent
            loginToggle={this.loginToggle}
            userLoginToggle={this.userLoginToggle}
          />
        ) : null}

        {this.state.noRegisterOption ? (
          <div className="box-container set-width-registration">
            <div className="box align-left">
              <h4 className="form-header">Fortsätt som gästanvändare</h4>
              {this.renderInputs()}

              <Button
                color="primary"
                type="button"
                className="button-for-register"
              >
                Slutför
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    guestUser: state.birthday.guestUser
  }
}

const mapDispatchToProps = dispatch => ({
  updateInfo: data => dispatch(doUpdateGuestDetails(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)
