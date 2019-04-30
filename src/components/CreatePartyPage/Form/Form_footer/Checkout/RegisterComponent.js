import React from "react"
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'
import staticData from '../../../../../staticData'

class RegisterComponent extends React.Component {


  renderCreateAcountData = ({
    id,
    type,
    classNameFormGroup,
    name,
    label,
    classNameLabel,
    placeholder,
    className,
    pattern,
    title }) => {

    return (
      <FormGroup key={id} className={classNameFormGroup}>
        <Label htmlFor={id} className={classNameLabel}>{label}</Label>
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


  render() {
    return (
      <div className="box-container">
        <div className="box align-left set-width-registration">
          <h2 className="form-headline">Skapa konto</h2>
          {staticData.createAccountData.map(this.renderCreateAcountData)}
          <div className="error item-level" aria-hidden="true"><p className="registration-text-password">Lösenordet måste bestå av 8-16 tecken, och innehålla minst 3 av följande alternativ: Stor eller liten bokstav (A-z), siffra eller specialtecken.</p></div>

          <div className="registration-buttons">
            <Button color="primary" type="button" onClick={this.props.loginToggle} >Avbryt</Button>
            <Button color="primary" type="button" className="ml-lg-2" >Fortsätt</Button>
            <Button color="primary" type="button" className="ml-lg-2" onClick={this.props.userLoginToggle}>Logga in</Button>
            <div className="error item-level login-item" aria-hidden="true"><p className="registration-text-log-in mb-2">Har du redan ett konto? Vänligen logga in.</p></div>
          </div>
        </div>
      </div>
    )
  }
}



export default RegisterComponent