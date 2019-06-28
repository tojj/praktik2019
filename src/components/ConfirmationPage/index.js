import React from 'react'
import axios from 'axios';
import { Send } from 'react-feather'
import BirthdayInvite from './BirthdayInvite/index'
import BirthdayInviteList from './BirthdayInviteList/index'

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emails: [],
      currentEmail: { text: '', key: '' },
      emailsSent: false,
      party: '',
      content: '',
      link: '',
    }
    this.findMatchingEvent = this.findMatchingEvent.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.sendInvites = this.sendInvites.bind(this)
  }
  // componentDidUpdate() {
  //   console.log(this.state.party);

  // }
  componentWillMount() {
    this.findMatchingEvent()
  }
  componentDidMount() {
    if (document.getElementById('email-input')) {
      document.getElementById('email-input').focus()
    } else {
      document.getElementById('pw-input').focus()
    }
  }

  async findMatchingEvent() {
    const eventLink = '12123tln'
    let party = await axios({
      method: 'get',
      url: `/api/events/populated/${eventLink}`
    })
    party = party.data

    this.setState({
      party: party,
      link: party.link
    })
    this.updateContent(party)

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
        <a href="https://tojj.herokuapp.com/kalas/${party.link}" style="word-wrap: none; text-decoration: none; font-size: 16px; font-weight: bold; background: #4762b7; color: #fff; padding: 15px 30px; border-radius: 100px; opacity: 0.8; margin: 20px 0">TILL KALASET</a>
      </div>
      <div style="padding: 20px 50px; background: #fff; max-width: 600px; margin: 0 auto; box-shadow: 0 0 5px 0px rgba(0,0,0,0.4)">
        <h4 style="font-weight: bold">Vad är Tojj?</h4>
        <p>Ingen mer stress kopplad till kalasfirande! Hos Tojj kan man skapa en digital kalasinbjudan och låta de inbjudna gästerna bidra till en bestämd present till födelsedagsbarnet. Enkelt för alla och som grädde på moset kan man välja att bidra till en välgörenhet.</p>
        <a href="https://tojj.herokuapp.com/" style="text-decoration: none; color: #4762b7">Läs mer ></a>
      </div>
    </body>`
    this.setState({
      content: emailTemplate,
      subject: party.link
    })
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
        emailsSent: false
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
    this.props.history.push("/kalas/" + this.props.eventLink)
  }
  async clickHandler() {
    await this.sendInvites()
    this.setState({ emailsSent: true })
  }
  async sendInvites() {
    let emailList = []
    this.state.emails.map(email => {
      return emailList.push(email.text)
    })
    for (let email of emailList) {
      this.sendEmail(email, this.state.content, this.state.link)
      if (!this.state.party.invited.includes(email)) {
        this.state.party.invited.push(email)

        await axios({
          method: 'put',
          url: `/api/events/id/${this.state.party._id}/invites`,
          data: {
            invited: this.state.party.invited
          }
        })

        this.setState({ emails: [] })
      }
    }
  }

  sendEmail = (email, message, subject) => {
    fetch('/api/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        subject: `Inbjudan till kalas ${subject}`,
        message: message
      })
    })
      .then((res) => res.json())
      .then((res) => {
      })
      .catch((err) => {
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
            sent={this.state.emailsSent}
            invitedList={this.state.party.invited}
          />
          <BirthdayInviteList
            entries={this.state.emails}
            deleteEmail={this.deleteEmail}
            invitedList={this.state.party.invited}
          />
          {this.state.emailsSent
            ? "SKICKAT"
            : this.state.emails < 1
              ? <button disabled className="send-button disabled btn btn-info"><Send /> Skicka</button>
              : <button onClick={this.clickHandler} className="send-button btn btn-info"><Send /> Skicka</button>
          }
          {this.state.emails < 1 && !this.state.emailsSent ? <p style={{ fontStyle: 'italic', fontSize: '.8rem', color: '#555', marginTop: '10px' }}>Lägg till minst en epost för att skicka inbjudan.</p> : null}
        </div>
        <div className="msg-container">
          <div className="msg-text">
            <p className="my-4 text-center">En bekräftelse har skickats till den mail du angett.</p>
            <ul>
              <li>När presentens summa är uppnådd kommer ett kommer ett mail till dig.</li>
              <li>Presenten skickas så fort summan är nådd, bra va?</li>
              <li>Du kan alltid skicka ut fler inbjudningar vid ett senare tillfälle om du råkar glömma någon.</li>
              <li>Undrar du något? Skriv till oss <a href="/vanliga-fragor/kontakt">här</a>!</li>
            </ul>
            <p className="mt-5 mb-3 text-center">Vi hoppas att {this.state.party.child} får en underbar dag!</p>
            <button onClick={this.redirectToYourParty} className="party-button btn btn-info">Till kalaset!</button>
          </div>
        </div>
      </div>
    )
  }


}

export default ConfirmationPage



