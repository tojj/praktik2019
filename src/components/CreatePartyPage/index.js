import React from 'react'
import { connect } from 'react-redux'
import FormContainer from './Form/index'
import REST from '../../REST'
import Buttons from './Buttons/index'
import Joi from 'joi-browser'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap'

class Event extends REST { }

class CreatePartyPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      eventLink: '',
      modal: false,
      errors: []
    }
    this.errors = []
    this.invalidForm = false
    this.createEvent = this.createEvent.bind(this)
    this.validateAll = this.validateAll.bind(this)

    this.schemaPartyEvent = {
      title: Joi.string().min(2).max(50).required().error(errors => {
        return {
          message: "Rubrik saknas"
        }
      }),
      name: Joi.string().min(2).max(20).required().error(errors => {
        return {
          message: "Namn måste innehålla minst 2 tecken"
        }
      }),
      age: Joi.number().integer().required().error(errors => {
        return {
          message: "Ålder måste vara mellan 1 och 20"
        }
      }),
    }

    this.schemaTimeAndPlace = {
      description: Joi.string().min(2).max(40).required().error(errors => {
        return {
          message: "Information till de inbjudna måste innehålla minst 5 tecken"
        }
      }),
      date: Joi.date().required().error(errors => {
        return {
          message: "Ange datum för kalas - datumet måste vara en vecka framåt från dagens datum"
        }
      }),
      time: Joi.required().error(errors => {
        return {
          message: "Tid för kalaset saknas"
        }
      }),
      deadline: Joi.date().required().error(errors => {
        return {
          message: "Ange OSA - skriv när du senast vill ha svar om folk kan komma. Detta måste vara senast en dag innan kalaset"
        }
      }),
      street: Joi.string().min(3).max(30).required().error(errors => {
        return {
          message: "Adress för kalaset saknas"
        }
      }),
      zip: Joi.string().min(3).max(30).required().error(errors => {
        return {
          message: "Postnumret för kalaset saknas"
        }
      }),
      city: Joi.string().min(2).max(40).required().error(errors => {
        return {
          message: "Stad för kalaset saknas"
        }
      })
    }

    this.schemaGuestUser = {
      firstName: Joi.string().min(2).max(20).required().error(errors => {
        return {
          message: "Ange ditt förnamn"
        }
      }),
      lastName: Joi.string().min(2).max(20).required().error(errors => {
        return {
          message: "Ange ditt efternamn"
        }
      }),
      address: Joi.string().min(3).max(30).required().error(errors => {
        return {
          message: "Ange din adress"
        }
      }),
      zipcode: Joi.number().integer().required().error(errors => {
        return {
          message: "Ange ditt postnummer"
        }
      }),
      phoneNumber: Joi.number().integer().required().error(errors => {
        return {
          message: "Ange ditt telefonnummer"
        }
      }),
      city: Joi.string().min(2).max(20).required().error(errors => {
        return {
          message: "Ange stad du bor i"
        }
      }),
      email: Joi.string().email({ minDomainSegments: 2 }).error(errors => {
        return {
          message: "Ange din e-postadress"
        }
      })
    }
  }

  /**
     *Validating all inputs
  */


  validateBirthdayEvent = () => {
    const result = Joi.validate(this.props.birthdayEvent, this.schemaPartyEvent, {
      abortEarly: false
    })

    if (!result.error) return null

    //if there are errors:

    const errors = []
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message
      this.errors.push(item.message)
    }
    this.setState({ errors: this.errors })
  }


  validateImageHandler = () => {
    let selectedImage = this.props.birthdayImage
    if (selectedImage) {
    } else {
      this.errors.push(["Välj bakgrundsbild till kalaset"])
      this.setState({ errors: this.errors })
    }

  }

  validateTimeAndPlace = () => {
    const result = Joi.validate(this.props.birthdayTimeAndPlace, this.schemaTimeAndPlace, {
      abortEarly: false
    })
    if (!result.error) return null
    const errors = []
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message
      this.errors.push(item.message)
    }
    this.setState({ errors: this.errors })
  }


  validatePresent = () => {
    let selectedPresent = this.props.present.id
    if (selectedPresent) {
    } else {
      this.errors.push(["Välj present"])
      this.setState({ errors: this.errors })
    }
  }


  validateFundraiser = () => {
    let isFundraiserSelected = this.props.fundraiser.buttonSelected
    if (isFundraiserSelected === true) {
    }
    else {
      this.errors.push(["Välj om du vill stötta en välgörenhet"])
      this.setState({ errors: this.errors })
    }
  }


  validateGuestUser = () => {
    const options = { abortEarly: false }
    const result = Joi.validate(this.props.guestUser, this.schemaGuestUser, options)
    if (!result.error) return null
    const errors = []
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message
      this.errors.push(item.message)
    }
    this.setState({ errors: this.errors })
    return errors
  }

  /**
   * Checking all validation functions and showing a
   * modal (if validation did not pass) or proceeding to 
   * Confirmation page
   */

  async validateAll() {
    this.errors = []
    this.validateBirthdayEvent()
    this.validateImageHandler()
    this.validateTimeAndPlace()
    this.validatePresent()
    this.validateFundraiser()
    this.validateGuestUser()
    if (this.errors.length > 0) {
      this.toggle()
      await this.setState({ errors: this.errors })
    }
    else {
      this.createEvent()
    }
  }


  redirectTo = (target) => {
    this.props.history.push(target)
  }

  async createEvent() {
    let link = await this.generateLink()
    let date = this.props.birthdayTimeAndPlace.date + ' ' + this.props.birthdayTimeAndPlace.time
    date = new Date(date).getTime()
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

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  superModal = () => {
    const { errors } = this.state
    const allErrors = errors.map((error) =>
      <ul>
        <li key={error}>{error}</li>
      </ul>)

    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader className="modalHeader" toggle={this.toggle}>Fel har uppstått</ModalHeader>
          <ModalBody className="modalBody">
            {allErrors}
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button className="link-preview-page" color="secondary" onClick={this.toggle}>Stäng</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  render() {
    return (
      <div className="createpartypage-wrapper">
        <FormContainer test={this.test} />
        <Buttons createEvent={this.validateAll} />
        {this.modalShow ? <Modal /> : ""}
        {this.superModal()}
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