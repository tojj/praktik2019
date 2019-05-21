import React from 'react'
import { connect } from 'react-redux'
import FormContainer from './Form/index'
import EVENT from '../../REST/EVENT'
import Buttons from './Buttons/index'

class Event extends EVENT { }

class CreatePartyPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventLink: ''
    }
    this.createEvent = this.createEvent.bind(this)
  }

  redirectTo = (target) => {
    this.props.history.push(target)
  }

  async createEvent() {
    const link = await this.generateLink()
    let date = this.props.birthdayTimeAndPlace.date + ' ' + this.props.birthdayTimeAndPlace.time
    console.log(this.props.birthdayTimeAndPlace.date, '.DATE')
    console.log(this.props.birthdayTimeAndPlace.time, 'TIME')
    console.log(date, 'DATE')
    date = new Date(date).getTime()
    console.log(date, 'DATE')
    const newEvent = new Event({
      title: this.props.birthdayEvent.title,
      child: this.props.birthdayEvent.name,
      age: this.props.birthdayEvent.age,
      image: "url('" + this.props.birthdayImage + "')",
      desc: this.props.birthdayTimeAndPlace.description,
      date: date,
      rsvp: new Date(this.props.birthdayTimeAndPlace.deadline).getTime(),
      location: {
        street: this.props.birthdayTimeAndPlace.street,
        zipcode: this.props.birthdayTimeAndPlace.zip,
        city: this.props.birthdayTimeAndPlace.city
      },
      swish: {
        number: "0709629276",
        amount: this.props.swishMoney,
        color: "#4762b7"
      },
      donate: this.props.fundraiser.donate,
      fundraiser: this.props.fundraiser.id,
      attending: [],
      product: this.props.present.id,
      link: link
    })

    await newEvent.save().then(data => {
      if (!data.name) {
        this.setContentAndSendEmail(newEvent)
        
        const target = "/bekräftelse/" + link

        this.redirectTo(target)
      } else {
        alert('ERROR:' + data.message)
      }
    })
  }
  setContentAndSendEmail = (event) => {
    this.setState({
      content: `<body style="margin: 0; padding: 30px 0; width: 100%; background-color: #fbf7ee; background-image: ${event.image}">
        <div style="padding: 30px 50px 50px; text-align: center; background: #fff; max-width: 600px; margin: 0 auto 15px; box-shadow: 0 0 5px 0px rgba(0,0,0,0.4)">
          <img src="http://i.imgur.com/Rkdv6ca.png" alt="Välkommen på kalas" style="width: 80%; height: auto" />
          <h1 style="font-weight: bold; color: #4762b7; text-transform: uppercase">Grattis, ditt kalas ${event.link} är nu skapat!</h1>
          <h4 style="font-weight: bold; margin-bottom: 50px">Klicka på knappen nedan för att gå direkt till kalaset eller klicka <a href="https://tojj.se/bekräftelse/${event.link}">här</a> för att bjuda in gästerna.</h4>
          <a href="https://tojj.se/kalas/${event.link}" style="word-wrap: none; text-decoration: none; font-size: 16px; font-weight: bold; background: #4762b7; color: #fff; padding: 15px 30px; border-radius: 100px; opacity: 0.8; margin: 20px 0">TILL KALASET</a>
        </div>
        <div style="padding: 20px 50px; background: #fff; max-width: 600px; margin: 0 auto; box-shadow: 0 0 5px 0px rgba(0,0,0,0.4)">
          <h4 style="font-weight: bold">Vad är Tojj?</h4>
          <p>Ingen mer stress kopplad till kalasfirande! Hos Tojj kan man skapa en digital kalasinbjudan och låta de inbjudna gästerna bidra till en bestämd present till födelsedagsbarnet. Enkelt för alla och som grädde på moset kan man välja att bidra till en välgörenhet.</p>
          <a href="https://tojj.se/" style="text-decoration: none; color: #4762b7">Läs mer ></a>
        </div>
      </body>`
    })

    this.sendEmail('jesper.asplund95@gmail.com'/* ska vara mailadressen som angetts i CPP form, typ. newEvent.user.email  */, this.state.content, event.link)
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
        subject: 'Bekräftelse för kalas:' + subject,
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
  /**
   * Link will be equal to the first 2 letters of the 
   * birthday child's name, uppercased. Followed by the age 
   * they will turn and 3 random symbols.
   */

  generateLink = () => {
    let link = []
    const name = this.props.birthdayEvent.name
    link.push(name.slice(0, 2).toUpperCase())
    link.push(this.props.birthdayEvent.age)

    let saltArray = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
    saltArray = saltArray.split("")
    let salt = ''
    for (let i = 0; i < 3; i++) {
      let letter = saltArray[Math.floor(Math.random() * saltArray.length)]
      salt = salt + letter
    }
    link.push(salt)
    link = link.join('')
    this.setState({ eventLink: link })
    return link
  }
  render() {
    return (
      <div className="createpartypage-wrapper">
        <FormContainer />
        <Buttons createEvent={this.createEvent} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    birthdayEvent: state.birthday.birthdayEvent,
    birthdayImage: state.birthday.birthdayImage,
    birthdayTimeAndPlace: state.birthday.birthdayTimeAndPlace,
    fundraiser: state.birthday.fundraiser,
    present: state.birthday.present,
    swishMoney: state.swish.swishMoney
  }
}

export default connect(mapStateToProps)(CreatePartyPage)