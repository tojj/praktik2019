import React from "react"
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'
import staticData from '../../staticData'
import LOGIN from '../../REST/LOGIN'


class Login extends LOGIN {
  async delete() {
    this._id = 1
    return super.delete();
  }
  static get baseRoute() {
    return "login/"
  }
}

class LoginComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        email: "",
        password: ""
      }
    }
    this.loggedinUser = ""

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

    let result = await newLogin.save()
    if (result.error && result.error === "The password does not match!") {
    } else if (
      result.error === "Not logged in!" ||
      result.error === "No such user!"
    ) {
      console.log("Wrong password")
    } else if (result.loggedIn === true) {
      this.props.login()
      console.log('login true');
      
    }
  }


  async checkIfLoggedIn() {
    this.loggedinUser = await Login.find()
    console.log(this.loggedinUser, "this one is logged in");
  }



  renderLoginData = ({
    id,
    type,
    name,
    label,
    className 
  }) => {
    return (
      <FormGroup key={id}>
        <Label htmlFor={id}>{label}</Label>
        <Input
          key={id}
          type={type}
          name={name}
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
          {staticData.loginData.map(this.renderLoginData)}
          <Button color="primary" type="button" className="ml-lg-2" onClick={this.handleSubmit}>Logga in</Button>
        </div >
      </div>
    )
  }
}
export default LoginComponent