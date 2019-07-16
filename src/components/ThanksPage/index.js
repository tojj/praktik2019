import React from 'react'
import axios from 'axios'

class ThanksPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      sending: false,
      confirmed: false
    }
  }
  clickHandler = (e) => {
    e.preventDefault()
    this.setState({ sending: true })
    axios({
      method: 'post',
      url: '/api/subscribers',
      data: {
        email: this.state.email
      }
    })
      .then(this.setState({ confirmed: true }))

  }
  changeHandler = (e) => {
    this.setState({
      email: e.target.value,
      sending: false,
      confirmed: false
    })
  }
  componentDidMount() {
    document.title = "Tojj - Tack!"
  }
  render() {
    return (
      <div className="thank-you-page">
        <h2>Tack för visat intresse!</h2>
        <p className="thank-you-text">Tojj är under en testperiod fram till hösten 2019. Tack för att du visat intresse och kollat runt på siten. Vi kommer att utvärdera sidan fram tills dess och den bör vara uppe då.</p>
        <p className="thank-you-text">Skriv upp dig på maillistan om du önskar att vi meddelar dig så snart vi är tillbaka:</p>
        <form onSubmit={this.clickHandler}>
          <input required type="email" onChange={this.changeHandler} className="email-input" />
          <div>
            {this.state.sending

              ? <div className={this.state.confirmed ? "circle-loader load-complete" : "circle-loader"}>
                <div className="checkmark draw" style={this.state.confirmed ? { display: 'inline' } : { display: 'none' }} />
              </div>

              : <input type="submit" value="Skriv upp" className="btn btn-info subscribe-button" id="subscribe-button" />}
          </div>
        </form>
      </div>
    )
  }
}

export default ThanksPage