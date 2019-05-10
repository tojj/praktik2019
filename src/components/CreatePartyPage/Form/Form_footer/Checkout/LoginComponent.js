import React from "react"
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'
import staticData from '../../../../../staticData'
import REST from '../../../../../REST'

class User extends REST { }
class Login extends REST {
  async delete() {
    this._id = 1;
    return super.delete();
  }
  static get baseRoute() {
    return "login/";
  }
}

class LoginComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        email: "",
        password: ""
      },
      errors: {}
    }
  }


  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data }
    data[input.name] = input.value
    this.setState({ data })
  }


  handleSubmit = e => {
    e.preventDefault()
    this.login()
  }




  async login() {
    const { data } = this.state
    let newLogin = new Login({
      email: data.email,
      password: data.password
    })
    // let user = await User.find(
    //   `.findOne({email:'$${newLogin.email}'})`
    // );
    // let user = await User.find(`.find({email: '${newLogin.email}'})`);
    let result = await newLogin.save()
    console.log(newLogin, "this is login");
    if (result.error && result.error === "The password does not match!") {
    } else if (
      result.error === "Not logged in!" ||
      result.error === "No such user!"
    ) {
      console.log("Wrong password");
    } else if (result.loggedIn === true) {
      console.log("Hej Du är nu inloggad.")
    }
  }


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
          onChange={this.handleChange}
          required
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
          <Button color="primary" type="button" className="ml-lg-2" onClick={this.handleSubmit}>Logga in</Button>
          <div className="error item-level login-item" aria-hidden="true"><p className="registration-text-log-in mb-2"><span className="login-link" onClick={this.props.userLoginToggle}>Registrera här</span></p></div>
        </div >
      </div>
    )
  }
}
export default LoginComponent