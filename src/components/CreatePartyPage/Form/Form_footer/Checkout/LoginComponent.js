import React from "react"
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'

class LoginComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="set-width">
        <div className="login-container">
          <div className="login-content">
            <h2 className="form-headline">Logga in</h2>
            <FormGroup >
              <Label htmlFor="email-input">E-postadress</Label>
              <Input type="email" name="email" id="user-email-input" placeholder="E-postadress" className="registration-form" required="" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password-input">Lösenord</Label>
              <Input type="password" name="password" id="user-password-input" placeholder="Lösenord" pattern="^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)|(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])|(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])|(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]))([A-Za-z\d@#$%^&amp;*\-_+=[\]{}|\\:',?/`~&quot;();!]|\.(?!@)){8,16}$" required="" className="registration-form" />
            </FormGroup>
            <Button color="primary" type="button" onClick={this.props.userLoginToggle}>Avbryt</Button>
            <Button color="primary" type="button" className="ml-lg-2" >Logga in</Button>
          </div >
        </div>
      </div>
    )
  }
}
export default LoginComponent