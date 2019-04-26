import React from "react"
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="login-container">
          <div className="login-content">
            <h2 className="form-headline">Skapa konto</h2>
            <FormGroup >
              <Label htmlFor="email-input">E-postadress</Label>
              <Input type="email" name="email" id="email-input" placeholder="E-postadress" className="registration-form" required="" />
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
            <Button color="primary" type="button" onClick={this.props.loginToggle} >Avbryt</Button>
            <Button color="primary" type="button" className="ml-lg-2" >Fortsätt</Button>
            <Button color="primary" type="button" className="ml-lg-2" onClick={this.props.userLoginToggle}>Logga in</Button>
          </div >
        </div>
      </div>
    )
  }
}

export default RegisterComponent