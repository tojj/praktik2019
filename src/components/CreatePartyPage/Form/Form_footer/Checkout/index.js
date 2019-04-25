import React from 'react'
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'
import { HelpCircle } from 'react-feather'


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

  render() {
    return (
      <div className="box-details-container details-container style-class" id="checkout-container">
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
            <FormGroup className="input50">
              <Label for="firstName-input">Förnamn</Label>
              <Input type="text" name="firstName" id="firstName-input" placeholder="Förnamn" className="form-input" />
            </FormGroup>
            <FormGroup className="input50">
              <Label htmlFor="lastName-input" className="ml-lg-2">Efternamn</Label>
              <Input type="text" name="lastName" id="lastName-input" placeholder="Efternamn" className="form-input ml-lg-2" />
            </FormGroup>
            <FormGroup className="input50">
              <Label htmlFor="email-input">E-post</Label>
              <Input type="email" name="email" id="email-input" placeholder="E-post" className="form-input" />
            </FormGroup>
            <FormGroup className="input50">
              <Label htmlFor="phoneNumber-input" className="position-relative ml-lg-2" title="Ange ditt telefonnummer om du vill få sms aviseringar">Telefonnummer<HelpCircle className="iconFeather" /></Label>
              <Input type="phoneNumber" name="phoneNumber" id="phoneNumber-input" placeholder="Telefonnummer" className="form-input ml-lg-2" />
            </FormGroup>
            <FormGroup className="input50">
              <Label htmlFor="address-input">Adress</Label>
              <Input type="text" name="" id="address-input" placeholder="Adress" className="form-input" />
            </FormGroup>
            <FormGroup className="input25">
              <Label htmlFor="zipcode-input" className="ml-lg-2">Postnummer</Label>
              <Input type="number" name="zipcode" id="zipcode-input" placeholder="Postnummer" className="form-input ml-lg-2" />
            </FormGroup>
            <FormGroup className="input50">
              <Label htmlFor="city-input">Stad <i data-feather="help-circle"></i></Label>
              <Input type="text" name="city" id="city-input" placeholder="Stad" className="form-input" />
            </FormGroup>
            <Button color="primary" type="button" className="button-for-register" >Slutför</Button>
          </div>
        </div>) : null}
      </div>)

  }
}

export default Checkout