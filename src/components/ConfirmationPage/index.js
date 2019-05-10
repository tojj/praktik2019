import React from 'react'
import { Minus } from 'react-feather'
import BirthdayInvite from '../BirthdayInvite'
import BirthdayInviteList from '../BirthdayInviteList'

class ConfirmationPage extends React.Component {
  constructor() {
    super()
    this.state = {
      emails: [],
      currentEmail: { text: '', key: '' },
      emailsSent: false
    }

    this.template = `<div style="padding:50px; text-align:center">
    <h2 style="color:#4762b7; font-size:2rem;">Du är bjuden på kalas!</h2>
    <p>Tojj vill bjuda in dig på sitt kalas: klicka på <a style="text-decoration:none;color:#4762b7" href="https://tojj.se/kalas/TO2qK4">här</a> för att komma direkt till kalaset eller scanna QR-koden nedan.</p>
    <p><img width="200px" height="200px" src="http://qr-generator.qrcode.studio/tmp/892f11780f0ef9c7cee281ac3ac184a0.svg?1557480020820" alt="qr-kod"/></p>
    <p style="font-style:italic;">Obs. Detta meddelande har genererats från en server och går inte att svara på.</p>
  </div>`
  }

  handleInput = e => {
    const emailText = e.target.value
    const currentEmail =  {text: emailText, key: Date.now() }
    this.setState({
      currentEmail
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
  sendInvites = () => {
    let emailList = []
    this.state.emails.map(email => {
      return emailList.push(email.text)
    })
    console.log(emailList);
    
    this.sendEmail(emailList, this.template)
    
  }
  sendEmail = (email, message) => {
    fetch('/json/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        subject: 'Du är bjuden!',
        message: message
      })
    })
    .then((res) => res.json())
    .then((res) => {
      console.log('here is the response: ', res)     
    })
    .catch((err) => {
      console.error('here is the error: ', err)
    })
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

          {this.state.emailsSent ? null : <button onClick={this.sendInvites} className="link-party-page send-button">Skicka</button>}
          <button onClick={this.redirectToYourParty} className="link-party-page conf-button">Tryck här för att komma till kalaset!</button>
        </div>
      </div>
    )
  }
}

export default ConfirmationPage



