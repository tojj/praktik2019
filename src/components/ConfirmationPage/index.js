import React from 'react'
import { Send } from 'react-feather'
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
      link: ''
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
    this.setState({
      content: emailTemplate,
      subject: party.link
    })
  }

  componentDidMount() {
    document.getElementById('email-input').focus()
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
      document.getElementById('email-input').focus();
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
    if (emailList.length > 1) {
      for (let email of emailList) {
        this.sendEmail(email, this.state.content, this.state.link)
        console.log('sending to: ', email);

      }
    } else {
      this.sendEmail(emailList, this.state.content, this.state.link)
    }
  }
  sendEmail = (email, message, subject) => {
    fetch('/json/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        subject: 'Komsi komsi... ' + subject,
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
      <div className="conf-wrapper">
        <div className="invite-container">
          <h1 className="conf-headline">Grattis ditt kalas är skapat!</h1>
          <p className="conf-info">Fyll i de epostadresser du vill skicka en inbjudan till.</p>
          <BirthdayInvite
            addEmail={this.addEmail}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentEmail={this.state.currentEmail}
          />
          <BirthdayInviteList entries={this.state.emails} deleteEmail={this.deleteEmail} />
          {this.state.emailsSent ? null : <button onClick={this.sendInvites} className="link-party-page send-button btn btn-success"><Send /> Skicka</button>}
        </div>
        <div className="msg-container">
          <button onClick={this.redirectToYourParty} className="link-party-page btn btn-primary">Till kalaset!</button>
        </div>
      </div>
    )
  }
}

export default ConfirmationPage



