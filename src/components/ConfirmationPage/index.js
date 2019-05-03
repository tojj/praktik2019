import React from 'react'
import { Minus } from 'react-feather'
import BirthdayInvite from '../BirthdayInvite'
import BirthdayInviteList from '../BirthdayInviteList'

class ConfirmationPage extends React.Component {
  constructor() {
    super()
    this.state = {
      emails: [],
      currentEmail: { text: '', key: '' }
    }

  }

  handleInput = e => {
    const emailText = e.target.value
    const currentEmail =  {text: emailText, key: Date.now() }
    this.setState({
      currentEmail,
    })
  }

  addEmail = e => {
    e.preventDefault()
    const newEmail = this.state.currentEmail
    if (newEmail.text !== '') {
      const emails = [...this.state.emails, newEmail]
      this.setState({
        emails: emails,
        currentEmail: { text: '', key: '' },
      })
    }
  }

  deleteEmail = key => {
    const filteredEmails = this.state.emails.filter(email => {
      return email.key !== key
    })
    this.setState({
      emails: filteredEmails
    })
  }

  redirectToYourParty = () => {
    let url = window.location.pathname.split("/")
    this.props.history.push("/kalas/" + url[2])
  }

  

  render() {


    return (
      <div>
        <div className="conf-wrapper bg-white">
          <h1 className="conf-headline">Grattis ditt kalas är skapat!</h1>
          <p className="conf-info"><Minus className="delete-invite" />Nedanstående kan du bjuda in personer till kalaset, detta är givetvis valfritt. </p>
        </div>
        <div className="bday-invite-wrapper bg-white">

          <BirthdayInvite 
            addEmail={this.addEmail}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentEmail={this.state.currentEmail}
            />
          <BirthdayInviteList entries={this.state.emails} deleteEmail={this.deleteEmail} />

          <button className="link-party-page send-button">Skicka</button>
          <button onClick={this.redirectToYourParty} className="link-party-page conf-button">Tryck här för att komma till kalaset!</button>
        </div>
      </div>
    )
  }
}

export default ConfirmationPage



