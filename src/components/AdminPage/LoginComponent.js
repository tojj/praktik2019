import React from 'react'
import axios from 'axios'
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'
import staticData from '../../staticData'

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
    if (result.data.error) {
      this.setState({loginFailed: true})
    } else if (result.data.loggedIn === true) {
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
          {this.state.loginFailed ? <p style={{textAlign: 'center', color: 'red', fontSize: '.8rem', marginTop: '20px', fontStyle: 'italic'}}>Inloggningen misslyckades</p> : null}
        </div >
      </div>
    )
  }
}
export default LoginComponent