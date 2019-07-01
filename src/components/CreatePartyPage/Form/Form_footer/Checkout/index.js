import React from "react"
import { FormGroup, Label } from "reactstrap"
import { connect } from "react-redux"
import { doUpdateGuestDetails } from "../../../../../store/Birthday/BirthdayActions"
import InputEvent from "../../Form_body/Event_input/InputEvent"
import { guestUserData } from "../../../../../staticData"

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
      loginOption: !this.state.loginOption,
      noRegisterOption: false,
      userLogin: false
    })
  }

  registerToggle = () => {
    this.setState({
      noRegisterOption: !this.state.noRegisterOption,
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
          autocomplete={guestUserData[key].autocomplete}
        />
      </FormGroup>
    )
  }

  callback = (value, key) => this.props.updateInfo({ [key]: value })

  render() {
    return (
      <div className="box-container set-width-registration">
        <div className="box align-left">
          <h2 className="form-header form-headline">Ange personuppgifter</h2>
          {this.renderInputs()}
          <div className="checkbox-container">
            <div className="input-group-check">
              <input
                className="check-input"
                id="check1"
                name="checkAgreement"
                type="checkbox"
              />
              <label className="check-label" htmlFor="check1">
                Jag godkänner Tojjs användaravtal och villkor
              </label>
            </div>
            <div className="input-group-check">
              <input
                className="check-input"
                id="check2"
                name="checkGDPR"
                type="checkbox"
              />
              <label className="check-label" htmlFor="check2">
                Jag godkänner att Tojj hanterar mina personuppgifter
              </label>
            </div>
          </div>
        </div>
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
