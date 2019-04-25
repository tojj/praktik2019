import React from 'react'
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'
import { doUpdateGuestDetails } from '../../../../../store/Birthday/BirthdayActions'
import { connect } from 'react-redux'
import { HelpCircle } from 'react-feather'
import InputEvent from '../../Form_body/Event_input/InputEvent'
import { guestUserData } from '../../../../../staticData'


class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginOption: false,
      noRegisterOption: false,
      userLogin: false
    }
  }

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


  updateInfo = (event) => {
    this.props.updateInfo(event.target.value)
  }

  renderInputs = () => this.props.guestUser
    ? Object.keys(this.props.guestUser).map(this.renderInput)
    : null


  renderInput = key => (
    <FormGroup key={key} className={guestUserData[key].classNameFormGroup}>
      <Label htmlFor={guestUserData[key].id} className={guestUserData[key].classNameLabel}>{guestUserData[key].label}</Label>
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

  callback = (value, key) => this.props.updateInfo({ [key]: value })

  render() {
    return (
      <div className="box-details-container" id="checkout-container">
        <div className="box align-left">
          <div className="form">
            <h2 className="form-headline text-center">
              Slutför
              </h2>
            <div className="input-group">
              <input
                className="radio-input"
                id="radio3"
                name="radio"
                type="radio"
                onClick={this.loginToggle}
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


        {this.state.loginOption ? (
          <div>
            <div className="login-container">
              <div className="login-content">
                <h2 className="form-headline">Skapa konto</h2>
                <FormGroup >
                  <Label htmlFor="email-input">E-postadress</Label>
                  <Input type="email" name="email" id="email-input" placeholder="E-postadress" className="registration-form" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password-input">Nytt lösenord</Label>
                  <Input type="password" name="password" id="password-input" placeholder="Nytt lösenord" pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&amp;*\-_+=[\]{}|\\:',?/`~&quot;();!]|\.(?!@)){8,16}$" title="Välj ett nytt lösenord" required="" className="registration-form" />
                </FormGroup>
                <div className="error item-level" aria-hidden="true"><p className="registration-text">Lösenordet måste bestå av 8-16 tecken, och innehålla minst 3 av följande alternativ: Stor eller liten bokstav (A-z), siffra eller specialtecken.</p></div>
                <FormGroup>
                  <Label htmlFor="password-input"></Label>
                  <Input type="password" name="password" id="password-confirmation-input" placeholder="Bekräfta ditt nya lösenord" pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&amp;*\-_+=[\]{}|\\:',?/`~&quot;();!]|\.(?!@)){8,16}$" title="Upprepa ditt nya lösenord" required="" className="registration-form" />
                </FormGroup>
                <div className="error item-level login-item" aria-hidden="true"><p className="registration-text mb-2">Har du redan ett konto? Vänligen logga in.</p></div>
                <Button color="primary" type="button" onClick={this.loginToggle} >Avbryt</Button>
                <Button color="primary" type="button" className="ml-lg-2" >Fortsätt</Button>
                <Button color="primary" type="button" className="ml-lg-2" onClick={this.userLoginToggle}>Logga in</Button>
              </div >
            </div>
          </div>) : null}


        {this.state.userLogin ? (
          <div className="set-width">
            <div className="login-container">
              <div className="login-content">
                <h2 className="form-headline">Logga in</h2>
                <FormGroup >
                  <Label htmlFor="email-input">E-postadress</Label>
                  <Input type="email" name="email" id="user-email-input" placeholder="E-postadress" className="registration-form" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="password-input">Lösenord</Label>
                  <Input type="password" name="password" id="user-password-input" placeholder="Lösenord" pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&amp;*\-_+=[\]{}|\\:',?/`~&quot;();!]|\.(?!@)){8,16}$" required="" className="registration-form" />
                </FormGroup>
                <Button color="primary" type="button" onClick={this.userLoginToggle}>Avbryt</Button>
                <Button color="primary" type="button" className="ml-lg-2" >Logga in</Button>
              </div >
            </div>
          </div>) : null}


        {this.state.noRegisterOption ? (<div className="box-container">
          <div className="box align-left">
            <h2 className="form-headline">Fortsätt som gästanvändare</h2>
            {this.renderInputs()}

            <Button color="primary" type="button" className="button-for-register" >Slutför</Button>
          </div>
        </div>) : null}
      </div>)

  }
}

const mapStateToProps = state => {
  return {
    guestUser: state.birthday.guestUser
  }
}

const mapDispatchToProps = dispatch => ({
  updateInfo: (data) => dispatch(doUpdateGuestDetails(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)