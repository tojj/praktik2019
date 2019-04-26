import React from "react"
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'
import staticData from '../../../../../staticData'

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  renderCreateAcountData = ({ id, type, name, label, placeholder, className, pattern, title }) => {
    if (id === "password-input-first") {
      return (
        <div>
          <FormGroup>
            <Label htmlFor={id}>{label}</Label>
            <Input
              type={type}
              name={name}
              pattern={pattern}
              title={title}
              className={className}
              placeholder={placeholder}
            />
          </FormGroup>
          <div className="error item-level" aria-hidden="true"><p className="registration-text">Lösenordet måste bestå av 8-16 tecken, och innehålla minst 3 av följande alternativ: Stor eller liten bokstav (A-z), siffra eller specialtecken.</p></div>
        </div>
      )
    }
    else {
      return (
        <FormGroup>
          <Label htmlFor={id}>{label}</Label>
          <Input
            type={type}
            name={name}
            pattern={pattern}
            title={title}
            className={className}
            placeholder={placeholder}
          />
        </FormGroup>)
    }
  }

  render() {
    return (
      <div>
        <div className="login-container">
          <div className="login-content">
            <h2 className="form-headline">Skapa konto</h2>
            {staticData.createAccountData.map(this.renderCreateAcountData)}
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