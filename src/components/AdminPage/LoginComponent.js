import React from 'react'
import axios from 'axios'
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
    let newLogin = {
      email: data.email,
      password: data.password
    }
    
    let result = await axios({
      method: 'post',
      url: '/api/login',
      data: {
        data: newLogin
      }
    })
    if (result.error && result.error === "The password does not match!") {
    } else if (
      result.error === "Not logged in!" ||
      result.error === "No such user!"
    ) {
    } else if (result.loggedIn === true) {
      this.props.login()  
    }
  }

  async checkIfLoggedIn() {
    this.loggedinUser = await axios({
      method: 'get',
      url: '/api/login'
    })
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