import React from 'react'
import { connect } from 'react-redux'
import FormContainer from './Form/index'
import REST from '../../REST'
import Buttons from './Buttons/index'
import Joi from 'joi-browser'

class Event extends REST { }

class CreatePartyPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventLink: '',
    }
    this.errors = []
    this.createEvent = this.createEvent.bind(this)
    this.schemaPartyEvent = {
      title: Joi.string().min(2).max(20).required(),
      name: Joi.string().min(2).max(20).required(),
      age: Joi.number().integer().required()
    }
    // this.schemaPartyImage = {
    //   image: Joi.validate().required()
    // }
    // this.schemaTimeAndPlace = {
    //   desc: this.props.birthdayTimeAndPlace.description,
    //   date: date,
    //   rsvp: new Date(this.props.birthdayTimeAndPlace.deadline).getTime(),

    //   street: this.props.birthdayTimeAndPlace.street,
    //   zipcode: this.props.birthdayTimeAndPlace.zip,
    //   city: this.props.birthdayTimeAndPlace.city
    // }
    this.schemaGuestUser = {
      firstName: Joi.string().min(2).max(20).required(),
      lastName: Joi.string().min(2).max(20).required(),
      address: Joi.string().alphanum().min(3).max(30).required(),
      zipCode: Joi.number().integer().required(),
      city: Joi.string().min(2).max(20).required(),
      phoneNumber: Joi.number().integer().required(),
      email: Joi.string().email({ minDomainSegments: 2 }),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    }

    
  }

  validateBirthdayEvent = () => {
    const result = Joi.validate(this.props.birthdayEvent, this.schemaPartyEvent, {
      abortEarly: false
    })

    if(!result.error) return null
    

    const errors = {}
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message
    }
    console.log(errors)
  }


  validateGuestUser = () => {
    const options = { abortEarly: false }
    const result = Joi.validate(this.props.guestUser, this.schemaGuestUser, options)
    console.log(result, "validation")

    if (!result.error) return null
    


    const errors = {}
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message
    }
    
    console.log(errors, "these are errors")
    return errors


  }

  redirectTo = (target) => {
    this.props.history.push(target)
  }

  // validateFirstName = () => {
  //   if (this.propbs.guestUser.firstName < 2) {
  //     this.errors.push({ msg: 'Förnamnet måste inhålla minst två tecken' })
  //     console.log(this.errors)
  //   } else {
  //     return
  //   }
  // }

  // validateLastName = () => {
  //   if (this.propbs.guestUser.lastName < 2) {
  //     this.errors.push({ msg: 'Förnamnet måste inhålla minst två tecken' })
  //     console.log(this.errors)
  //   } else {
  //     return
  //   }
  // }

  // validateEmail = () => {

  // }




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
        image: "http://betalamedswish.se/API/Get/?n=0709629276&a=" + this.props.swishMoney + "&m=" + link + "&la=true&lm=true&s=500",
        color: "#4762b7"
      },
      donate: this.props.fundraiser.donate,
      fundraiser: this.props.fundraiser.id,
      attending: [],
      product: this.props.present.id,
      link: link,

      guestUser: {
        firstName: this.props.guestUser.firstName,
        lastName: this.props.guestUser.lastName,
        email: this.props.guestUser.email,
        phoneNumber: this.props.guestUser.phoneNumber,
        address: this.props.guestUser.address,
        zipcode: this.props.guestUser.zipcode,
        city: this.props.guestUser.city

      }

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
        <Buttons createEvent={this.validateBirthdayEvent} />
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
    swishMoney: state.swish.swishMoney,
    guestUser: state.birthday.guestUser,
  }
}

export default connect(mapStateToProps)(CreatePartyPage)