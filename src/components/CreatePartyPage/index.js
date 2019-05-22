import React from 'react'
import { connect } from 'react-redux'
import FormContainer from './Form/index'
import REST from '../../REST'
import Buttons from './Buttons/index'
import Joi from 'joi-browser'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
    // this.toggleModal = this.toggleModal.bind(this);
    this.createEvent = this.createEvent.bind(this)
    this.validateAll = this.validateAll.bind(this)
    this.schemaPartyEvent = {
      title: Joi.string().min(2).max(20).required().error(errors => {
        return {
          message: "Glöm inte skriva en rubrik till ditt kalas!"
        }
      }),
      name: Joi.string().min(2).max(20).required().error(errors => {
        return {
          message: "Skriv namn på vem kalaset är till! Namnet måset vara större än en bokstav. "
        }
      }),
      age: Joi.number().integer().required().error(errors => {
        return {
          message: "Ålder måste vara mellan 1-20"
        }
      }),
    }

    this.schemaTimeAndPlace = {
      description: Joi.string().min(2).max(40).required().error(errors => {
        return {
          message: "Skriv minst 5-10 tecken information till de inbjudna!"
        }
      }),
      date: Joi.date().required().error(errors => {
        return {
          message: "Välj datum till kalas, datumet måste vara en vecka framåt från dagens datum"
        }
      }),
      time: Joi.required().error(errors => {
        return {
          message: "Fyll i vilken tid du vill att kalaset ska börja"
        }
      }),
      deadline: Joi.date().required().error(errors => {
        return {
          message: "Skriv när du senast vill ha svar om folk kan komma. Detta måste vara senast en dag innan kalaset"
        }
      }),
      street: Joi.string().min(3).max(30).required().error(errors => {
        return {
          message: "Skriv din adress där kalaset ska vara"
        }
      }),
      zip: Joi.string().min(3).max(30).required().error(errors => {
        return {
          message: "Fyll i postnumret"
        }
      }),
      city: Joi.string().min(2).max(40).required().error(errors => {
        return {
          message: "Fyll i vilken stad kalaset ska vara i"
        }
      })
    }

    this.schemaGuestUser = {
      firstName: Joi.string().min(2).max(20).required(),
      lastName: Joi.string().min(2).max(20).required(),
      address: Joi.string().min(3).max(30).required(),
      zipcode: Joi.number().integer().required(),
      city: Joi.string().min(2).max(20).required(),
      phoneNumber: Joi.number().integer().required(),
      email: Joi.string().email({ minDomainSegments: 2 }),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    }
  }

  /**
     *Validating all inputs
     */

  // basicValidation = () => {
  //   if (this.props.input.isValid) {
  //     console.log("props shows it's invalid");
  //   }
  // }


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
      this.errors.push(["Välj bakgrundsbild till kalaset!"])
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
      this.errors.push(["Glöm inte att välja present!"])
      this.setState({ errors: this.errors })
    }
  }


  validateFundraiser = () => {
    let isFundraiserSelected = this.props.fundraiser.buttonSelected
    if (isFundraiserSelected === true) {
    }
    else {
      this.errors.push(["Välj om du vill stötta en välgörenhet eller inte."])
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
    }
    this.errors.push(errors)
    this.setState({ errors: this.errors })
    return errors
  }

  /**
 * VChecking all validation functions and showing a
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

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  superModal = () => {
    const { errors } = this.state
    const allErrors = errors.map((error) => <p key={error}>{error}</p>)

    return (
      <div>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader className="modalH" toggle={this.toggle}>Fel har uppstått</ModalHeader>
          <ModalBody className="modalB">
            {allErrors}
          </ModalBody>
          <ModalFooter className="modalF">
            <Button color="secondary" onClick={this.toggle}>Stäng</Button>
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