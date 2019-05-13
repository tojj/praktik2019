import React from "react"
import {
  Button,
  Input,
  FormGroup,
  Label
} from 'reactstrap'
import staticData from '../../../../../staticData'
import REST from '../../../../../REST'
import Joi from 'joi-browser'


class Login extends REST {
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
      },
      errors: {}
    }
    this.loggedinUser = ""
    this.schema = {
      email: Joi.string().required().label('Email'),
      password: Joi.string().required().label('Password')
    }
  }



  validate = () => {
    const options = { abortEarly: false }
    const result = Joi.validate(this.state.data, this.schema, options)
    console.log(result, "validation")

    if (!result.error) return null

    const errors = {}
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message
    }
    console.log(errors, "these are errors")
    return errors

  }

  validateInputField = ({ name, value }) => {
    const obj = { [name]: value }
    const schema = { [name]: this.schema[name] }
    const { error } = Joi.validate(obj, schema)
    return error ? error.details[0].message : null
  }


  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateInputField(input)
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]
    const data = { ...this.state.data }
    data[input.name] = input.value
    this.setState({ data, errors })
  }


  handleSubmit = e => {
    e.preventDefault()
    const errors = this.validate();
    this.setState({ errors: errors || {} })
    if (errors) return
    this.login()
    this.checkIfLoggedIn()

  }


  async login() {
    const { data } = this.state
    let newLogin = new Login({
      email: data.email,
      password: data.password
    })

    let result = await newLogin.save()
    console.log(newLogin, "this is login")
    if (result.error && result.error === "The password does not match!") {
    } else if (
      result.error === "Not logged in!" ||
      result.error === "No such user!"
    ) {
      console.log("Wrong password")
    } else if (result.loggedIn === true) {
      console.log("Hej Du är nu inloggad.")
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
    className,
    pattern }) => {
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
          <Button color="primary" type="button" className="ml-lg-2" onClick={this.handleSubmit}>Logga in</Button>
          <div className="error item-level login-item" aria-hidden="true"><p className="registration-text-log-in mb-2"><span className="login-link" onClick={this.props.userLoginToggle}>Registrera här</span></p></div>
        </div >
      </div>
    )
  }
}
export default LoginComponent