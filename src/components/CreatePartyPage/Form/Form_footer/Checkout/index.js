import React from 'react'
import { Button, Input, FormGroup, Label } from 'reactstrap'


class Checkout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginOption: false,
      noRegisterOption: false
    }

  }

  loginToggle = () => {
    this.setState({
      loginOption: !this.state.loginOption
    })
  }

  registerToggle = () => {
    this.setState({
      noRegisterOption: !this.state.noRegisterOption
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
                <FormGroup>
                  <Label for="email-input">E-post</Label>
                  <Input type="email" name="email" id="email-input" placeholder="E-post" />
                </FormGroup>
                <FormGroup>
                  <Label for="Pssword-input">Lösenord</Label>
                  <Input type="password" name="password" id="password-input" placeholder="Lösenord" />
                </FormGroup>
                <Button color="primary" type="button" >Registrera</Button>
              </div >
            </div>
          </div>) : null}
        {this.state.noRegisterOption ? (<div className="box-container">
          <div className="box align-left">
            <div className="form">
              <h2 className="form-headline">Fortsätt utan konto</h2>
              <Button color="primary" type="button" >Slutför</Button>
            </div>
          </div>
        </div>) : null}
      </div>)

  }
}

export default Checkout