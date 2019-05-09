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

class RegisterComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        firstName: "",
        lastName: "",
        address: "",
        zipCode: "",
        city: "",
        phoneNumber: "",
        email: "",
        password: "",
        passwordRepeat: ""
      }
    }
  }


  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data }
    data[input.name] = input.value
    this.setState({ data })
  }


  handleSubmit = e => {
    e.preventDefault()
    this.getUserData()

  }


  /** 
   * Creating new user (getting value from input) and saving the User
   * to the database
   */

  async getUserData() {

    const { data } = this.state
    let errors = []

    let newUser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      zipCode: data.zipCode,
      city: data.city,
      phoneNumber: data.phoneNumber,
      email: data.email,
      password: data.password,
      passwordRepeat: data.passwordRepeat
    })



    let user = await User.find(`.find({email: '${newUser.email}'})`)
    if (user.length === 0 && newUser.password !== newUser.passwordRepeat) {
      alert("Passwords must match!")
      console.log(("Passwords must match!"))
      errors.push({ msg: "Passwords must match!" })
      this.resetPasswordFields()

    }
    else if (user.length === 0 && newUser.password.length < 7) {
      alert("Password has to be at least 7 characters")
      console.log("Password has to be at least 7 characters")
      errors.push({ msg: "Password has to be at least 7 characters" })
    }
    else if (user.length === 0) {
      if (newUser.password === newUser.passwordRepeat) {
        newUser.save()
        console.log("User registered!", newUser)
        this.resetForm()
      }
    }
    else {
      console.log("User already exists")
      alert("User exists! Choose another email.")
    }
  }

  /** 
  *Resetting input fields after submition 
  */

  resetForm = () => {

    this.setState({
      data: {
        firstName: "",
        lastName: "",
        address: "",
        zipCode: "",
        city: "",
        phoneNumber: "",
        email: "",
        password: "",
        passwordRepeat: ""
      }
    })
  }

  resetPasswordFields = () => {
    this.setState({
      data: {
        password: "",
        passwordRepeat: ""
      }
    })
  }

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

    const { data } = this.state
    return (
      <FormGroup key={id} className={classNameFormGroup}>
        <Label htmlFor={id} className={classNameLabel}>{label}</Label>
        <Input
          type={type}
          name={name}
          value={data[name]}
          pattern={pattern}
          title={title}
          className={className}
          placeholder={placeholder}
          onChange={this.handleChange}
          required
        />
      </FormGroup>)
  }


  render() {
    return (

      <div className="box-container account-container">
        <div className="box align-left set-width-registration">
          <h4 className="form-header">Skapa konto</h4>
          {staticData.createAccountData.map(this.renderCreateAcountData)}
          <div className="error item-level" aria-hidden="true"><p className="registration-text-password">Lösenordet måste bestå av 8-16 tecken, och innehålla minst 3 av följande alternativ: Stor eller liten bokstav (A-z), siffra eller specialtecken.</p></div>
          <div className="registration-buttons">
            <Button color="primary" type="button" onClick={this.props.loginToggle} >Avbryt</Button>
            <Button color="primary" type="button" className="ml-lg-2" onClick={this.handleSubmit}>Fortsätt</Button>
            <div className="error item-level login-item" aria-hidden="true"><p className="registration-text-log-in mb-2">Har du redan ett konto? Vänligen  <span className="login-link" onClick={this.props.userLoginToggle}>logga in </span></p></div>
          </div>
        </div>
      </div >

    )
  }
}



export default RegisterComponent