import React from "react"
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'
import staticData from '../../../../../staticData'

class LoginComponent extends React.Component {


  renderLoginData = ({ id, type, name, label, className, pattern }) => {
    return (
      <FormGroup key={id}>
        <Label htmlFor={id}>{label}</Label>
        <Input
          key={id}
          type={type}
          name={name}
          pattern={pattern}
          className={className}
          placeholder={label}
        />
      </FormGroup>)
  }

  render() {
    return (
      <div className="login-container" id="login-component">
        <div className="login-content">
          <h4 className="form-header" >Logga in</h4>
          {staticData.loginData.map(this.renderLoginData)}
          <Button color="primary" type="button" onClick={this.props.loginToggle}>Avbryt</Button>
          <Button color="primary" type="button" className="ml-lg-2" >Logga in</Button>
          <div className="error item-level login-item" aria-hidden="true"><p className="registration-text-log-in mb-2"><span className="login-link" onClick={this.props.userLoginToggle}>Registrera här</span></p></div>
        </div >
      </div>
    )
  }
}
export default LoginComponent