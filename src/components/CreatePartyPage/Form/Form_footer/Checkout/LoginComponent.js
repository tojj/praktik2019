import React from "react"
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'
import staticData from '../../../../../staticData'

class LoginComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  renderLoginData = ({ id, type, name, label, className, pattern }) => {
    return (
      <FormGroup>
        <Label htmlFor={id}>{label}</Label>
        <Input
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
      <div className="set-width">
        <div className="login-container">
          <div className="login-content">
            <h2 className="form-headline">Logga in</h2>
            {staticData.loginData.map(this.renderLoginData)}
            <Button color="primary" type="button" onClick={this.props.userLoginToggle}>Avbryt</Button>
            <Button color="primary" type="button" className="ml-lg-2" >Logga in</Button>
          </div >
        </div>
      </div>
    )
  }
}
export default LoginComponent