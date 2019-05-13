import React from 'react'
import { Minus } from 'react-feather'
import BirthdayInvite from '../BirthdayInvite'
import BirthdayInviteList from '../BirthdayInviteList'
import REST from '../../REST'

class Event extends REST { }

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: [],
      currentEmail: { text: '', key: '' },
      emailsSent: false,
      party: '',
      content: '',
    }
    this.findMatchingEvent()
    this.findMatchingEvent = this.findMatchingEvent.bind(this)
  }
  async findMatchingEvent() {
    const eventLink = this.props.match.params.link
    const party = await Event.find(`.find({link:"${eventLink}"}).exec()`)
    this.setState({ party: party[0] })
    this.updateContent(party[0])

  }
  updateContent = (party) => {
    let date = new Date(party.date).toLocaleDateString("sv-SE", {
      weekday: "short",
      day: "numeric",
      month: "long",
      hour: 'numeric',
      minute: 'numeric'
    })
    date = date.split(' ')

    const emailTemplate = `<body style="margin: 0; padding: 30px 0; width: 100%; background-color: #fbf7ee; background-image: ${party.image}">
      <div style="padding: 30px 50px 50px; text-align: center; background: #fff; max-width: 600px; margin: 0 auto 15px; box-shadow: 0 0 5px 0px rgba(0,0,0,0.4)">
        <img src="http://i.imgur.com/0aOsg8B.png" alt="Välkommen på kalas" style="width: 80%; height: auto" />
        <h1 style="font-weight: bold; color: #4762b7; text-transform: uppercase">${party.title}</h1>
        <h2 style="font-weight: bold; text-transform: uppercase">${date[0]} ${date[1]} ${date[2]}</h2>
        <h3 style="font-weight: bold; margin-bottom: 20px; text-transform: uppercase">Kl ${date[3]}</h3>
        <h4 style="font-weight: bold; margin-bottom: 50px"> ${party.child} ska ha kalas och du är bjuden! Klicka på länken nedan för att svara på om du kommer.</h4>
        <a href="https://tojj.se/kalas/${party.link}" style="word-wrap: none; text-decoration: none; font-size: 16px; font-weight: bold; background: #4762b7; color: #fff; padding: 15px 30px; border-radius: 100px; opacity: 0.8; margin: 20px 0">TILL KALASET</a>
      </div>
      <div style="padding: 20px 50px; background: #fff; max-width: 600px; margin: 0 auto; box-shadow: 0 0 5px 0px rgba(0,0,0,0.4)">
        <h4 style="font-weight: bold">Vad är Tojj?</h4>
        <p>Lorem ipsum dolor sit amet; consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh; viverra non; semper suscipit; posuere a; pede.</p>
        <a href="https://tojj.se/" style="text-decoration: none; color: #4762b7">Läs mer ></a>
      </div>
    </body>`
    this.setState({ content: emailTemplate })
  }


  handleInput = e => {
    const emailText = e.target.value
    const currentEmail = { text: emailText, key: Date.now() }
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

    this.sendEmail(emailList, this.state.content)

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
        this.setState({ emailsSent: true })
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
        <div style={{ margin: '200px 0' }}>
          {this.state.content}
        </div>
      </div>
    )
  }
}

export default ConfirmationPage



