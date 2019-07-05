import React from 'react'
import axios from 'axios'
import { Eye } from 'react-feather'
import { connect } from 'react-redux'
import ConfirmationPage from '../ConfirmationPage/index'

class PasswordInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      type: 'password',
      error: false,
      loggedIn: false,
      link: this.props.match.params.link
    }
  }

  validateInput = input => {
    axios({
      method: 'get',
      url: `/api/events/populated/${this.state.link}/login?input=${input}`,
    }).then(response => {
      if (response.data) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ error: true })
      }
    })
      .catch(error => {
        console.log(error.response)
      })
  }
  componentDidMount() {
    if (this.props.guestUser.password) {
      this.validateInput(this.props.guestUser.password)
    } else {
      document.title = 'Tojj - Logga in'
      document.getElementById('pw-input').focus();

      return
    }
  }
  onChangeHandler = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  onClickHandler = () => {
    this.validateInput(this.state.input)
  }
  peekPassword = () => {
    if (this.state.type === 'password') {
      this.setState({ type: 'text' })
    } else {
      this.setState({
        type: 'password'
      })
    }
  }
  onEnterPress = (e) => {
    if (e.key === 'Enter') {
      document.getElementById('submit-input').click();
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <ConfirmationPage history={this.props.history} eventLink={this.state.link} />
    } else {
      return (
        <div style={{
          width: '100%',
          color: 'black',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div
            style={{
              borderTop: '8px solid #B164B8',
              backgroundColor: '#fff',
              textAlign: 'center',
              margin: '50px auto',
              maxWidth: '600px',
              width: '90%',
              padding: '50px 30px',
              borderRadius: '5px'
            }}>
            <h4 style={{ fontFamily: 'Montserrat', fontWeight: '600', width: '100%' }}>Inloggning till kalas</h4>
            <div
              style={{
                position: 'relative',
                margin: '50px auto',
                width: '100%'
              }}>
              <input
                id="pw-input"
                type={this.state.type}
                style={{
                  width: '100%',
                  padding: '4px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  borderRadius: '4px'
                }}
                onKeyPress={this.onEnterPress}
                onChange={this.onChangeHandler} />
              <Eye
                color="black"
                style={{
                  opacity: '.5',
                  cursor: 'pointer',
                  position: 'absolute',
                  right: '10px',
                  top: '5px'
                }}
                onClick={this.peekPassword} />
              <button
                id="submit-input"
                className="btn btn-info mt-3"
                onClick={this.onClickHandler}>
                Bekräfta
            </button>
            </div>

            {!this.state.error
              ? <p style={{ marginTop: "1rem" }}>Skriv in lösenordet du angett vid skapandet av kalaset</p>
              : <p style={{ marginTop: "1rem", color: 'red' }}>Fel</p>}
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    guestUser: state.birthday.guestUser,
  }
}

export default connect(mapStateToProps)(PasswordInput)
