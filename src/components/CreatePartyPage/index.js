import React from 'react'
import { connect } from 'react-redux'
import FormContainer from './Form/index'
import REST from '../../REST'
import Buttons from './Buttons/index'

class Event extends REST { }

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
        const target = "/kalas/" + link + "/bekräftelse"
        this.redirectTo(target) 
      } else {
        alert('ERROR:' + data.message)
      }
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