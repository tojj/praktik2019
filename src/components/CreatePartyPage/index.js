import React from "react"
import axios from "axios"
import { connect } from "react-redux"
import FormContainer from "./Form/index"
import Buttons from "./Buttons/index"
import Joi from "joi-browser"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

class CreatePartyPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      siteActive: '',
      eventLink: "",
      modal: false,
      errors: []
    }
    this.errors = []
    this.invalidForm = false
    this.checkIfSiteActive()
    this.createEvent = this.createEvent.bind(this)
    this.findNewEventAndSendConfirmation = this.findNewEventAndSendConfirmation.bind(this)
    this.validateAll = this.validateAll.bind(this)
    window.scrollTo(0, 0)

    this.schemaPartyEvent = {
      aTitle: Joi.string()
        .required()
        .error(errors => {
          return {
            message: "Rubrik saknas"
          }
        }),
      bName: Joi.string()
        .min(2)
        .max(20)
        .required()
        .error(errors => {
          return {
            message: "Namn måste innehålla minst 2 tecken"
          }
        }),
      cAge: Joi.number()
        .integer()
        .max(20)
        .required()
        .error(errors => {
          return {
            message: "Ålder måste vara mellan 1 och 20"
          }
        })
    }

    this.schemaTimeAndPlace = {
      aDescription: Joi.string()
        .min(2)
        .max(280)
        .required()
        .error(errors => {
          return {
            message:
              "Information till de inbjudna måste innehålla 2-280 tecken."
          }
        }),
      bDate: Joi.date()
        .min(Date.now() + 604800000)
        .required()
        .error(errors => {
          return {
            message:
              "Ange datum för kalas - datumet måste vara en vecka framåt från dagens datum"
          }
        }),
      cTime: Joi.required().error(errors => {
        return {
          message: "Tid för kalaset saknas"
        }
      }),
      dStreet: Joi.string()
        .min(3)
        .max(30)
        .required()
        .error(errors => {
          return {
            message: "Adress för kalaset saknas"
          }
        }),
      eZip: Joi.string()
        .min(4)
        .max(5)
        .required()
        .error(errors => {
          return {
            message: "Postnumret för kalaset saknas"
          }
        }),
      fCity: Joi.string()
        .min(2)
        .max(40)
        .required()
        .error(errors => {
          return {
            message: "Stad för kalaset saknas"
          }
        }),
      gDeadline: Joi.date()
        .max(this.getDeadlineTime())

        .required()
        .error(errors => {
          return {
            message:
              "Ange OSA - skriv när du senast vill ha svar om folk kan komma. Detta måste vara senast tre dagar innan kalaset"
          }
        })
    }

    this.schemaAgreement = {
      userAgreement: Joi.boolean()
        .invalid(false)
        .required()
        .error(errors => {
          return {
            message: "Godkänn våra användaravtal"
          }
        }),
      gdprAgreement: Joi.boolean()
        .invalid(false)
        .required()
        .error(errors => {
          return {
            message: "Godkänn att vi hanterar dina personuppgifter"
          }
        })
    }

    this.schemaGuestUser = {
      aFirstname: Joi.string()
        .min(2)
        .max(20)
        .required()
        .error(errors => {
          return {
            message: "Ange ditt förnamn"
          }
        }),
      bLastname: Joi.string()
        .min(2)
        .max(20)
        .required()
        .error(errors => {
          return {
            message: "Ange ditt efternamn"
          }
        }),
      eAddress: Joi.string()
        .min(3)
        .max(30)
        .required()
        .error(errors => {
          return {
            message: "Ange din adress"
          }
        }),
      fZipcode: Joi.string()
        .min(2)
        .max(20)
        .required()
        .error(errors => {
          return {
            message: "Ange ditt postnummer"
          }
        }),
      dPhonenumber: Joi.number()
        .integer()
        .required()
        .error(errors => {
          return {
            message: "Ange ditt telefonnummer"
          }
        }),
      gCity: Joi.string()
        .min(2)
        .max(20)
        .required()
        .error(errors => {
          return {
            message: "Ange din stad"
          }
        }),
      cEmail: Joi.string()
        .email({ minDomainSegments: 2 })
        .error(errors => {
          return {
            message: "Ange din e-postadress"
          }
        }),
      password: Joi.string()
        .min(1)
        .max(30)
        .required()
        .error(errors => {
          return {
            message: "Fyll i ett lösenord, max 30 tecken"
          }
        })
    }
    this.schemaSwish = {
      swishMoney: Joi.number()
        .integer()
        .min(50)
        .required()
        .error(errors => {
          return {
            message: "Beloppet för swish måste vara minst 50 kronor"
          }
        })
    }
  }

  /**
   * Method to get correct validation for rsvp/deadline
   */
  getDeadlineTime = () => {
    let deadline = new Date(
      this.props.birthdayTimeAndPlace.bDate
        ? this.props.birthdayTimeAndPlace.bDate
        : 0
    )
    deadline = deadline.getTime() - 172800001
    return deadline
  }

  /**
   * Validation functions.
   * @param {
   * Data- Takes the data typed from the user. And validates it using Joi.
   * Errors- If any errors in validation it adds it to an array [] and displays it in the modal.
   * }
   */

  validateBirthdayEvent = () => {
    const result = Joi.validate(
      this.props.birthdayEvent,
      this.schemaPartyEvent,
      {
        abortEarly: false
      }
    )

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
    this.schemaTimeAndPlace.gDeadline = Joi.date()
      .min(Date.now())
      .max(this.getDeadlineTime())
      .required()
      .error(errors => {
        return {
          message:
            "Ange OSA - skriv när du senast vill ha svar om folk kan komma. Detta måste vara senast tre dagar innan kalaset"
        }
      })
    const result = Joi.validate(
      this.props.birthdayTimeAndPlace,
      this.schemaTimeAndPlace,
      {
        abortEarly: false
      }
    )
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
    } else {
      this.errors.push(["Välj om du vill stötta en välgörenhet"])
      this.setState({ errors: this.errors })
    }
  }
  validateSwish = () => {
    const result = Joi.validate(this.props.swish, this.schemaSwish, {
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

  validateGuestUser = () => {
    const options = { abortEarly: false }
    const result = Joi.validate(
      this.props.guestUser,
      this.schemaGuestUser,
      options
    )
    if (!result.error) return null
    const errors = []
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message
      this.errors.push(item.message)
    }
    this.setState({ errors: this.errors })
    return errors
  }

  validateAgreement = () => {
    const result = Joi.validate(this.props.agreement, this.schemaAgreement, {
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
    this.validateSwish()
    this.validateFundraiser()
    this.validateGuestUser()
    this.validateAgreement()
    if (this.errors.length > 0) {
      this.toggle()
      await this.setState({ errors: this.errors })
    } else {
      if (this.state.siteActive) {
        this.createEvent()
      } else {
        this.redirectTo('/tack-for-visat-intresse')
      }
    }
  }
  componentDidMount() {
    document.title = "Tojj - Skapa kalas"
  }
  checkIfSiteActive = () => {
    axios({
      method: 'get',
      url: '/api/settings'
    }).then(data => this.setState({ siteActive: data.data.active }))
  }


  /**
   * Simple redirect function
   */
  redirectTo = target => {
    this.props.history.push(target)
  }

  /**
   * Takes all the data thats written by the client.
   * If all validation passes it creates an event. (Birthday)
   * This using all the Redux data and sent it to the Backend and DB using Axios.
   */
  async createEvent() {
    let link = await this.generateLink()
    let date =
      this.props.birthdayTimeAndPlace.bDate +
      " " +
      this.props.birthdayTimeAndPlace.cTime
    date = new Date(date).getTime()

    await axios({
      method: "post",
      url: "/api/events",
      data: {
        title: this.props.birthdayEvent.aTitle,
        child: this.props.birthdayEvent.bName,
        age: this.props.birthdayEvent.cAge,
        image: "url('" + this.props.birthdayImage + "')",
        desc: this.props.birthdayTimeAndPlace.aDescription,
        date: date,
        rsvp: new Date(this.props.birthdayTimeAndPlace.gDeadline).getTime(),
        location: {
          street: this.props.birthdayTimeAndPlace.dStreet,
          zipcode: this.props.birthdayTimeAndPlace.eZip,
          city: this.props.birthdayTimeAndPlace.fCity
        },
        swish: {
          number: "0708358158",
          amount: this.props.swish.swishMoney,
          color: "#4762b7"
        },
        donate: this.props.fundraiser.donate,
        fundraiser: this.props.fundraiser.id,
        attending: [],
        product: this.props.present.id,
        link: link,

        guestUser: {
          firstName: this.props.guestUser.aFirstame,
          lastName: this.props.guestUser.bLastame,
          email: this.props.guestUser.cEmail,
          phoneNumber: this.props.guestUser.dPhonenumber,
          address: this.props.guestUser.eAddress,
          zipcode: this.props.guestUser.fZipcode,
          city: this.props.guestUser.gCity
        },
        password: this.props.guestUser.password
      }
    }).then(data => {
      if (!data.name) {
        this.findNewEventAndSendConfirmation(link)

        this.redirectTo("/bekraftelse/" + link)
      } else {
        alert("ERROR:" + data.message, "please try again")
      }
    })
  }
  async findNewEventAndSendConfirmation(eventLink) {
    let eventFromDb = await axios({
      method: "get",
      url: `/api/events/populated/${eventLink}`
    })
    await this.setContentAndSendEmail(eventFromDb.data)
  }
  /**
   * Long function with a template.
   * This to send emails to the client.
   */
  setContentAndSendEmail = event => {
    const date = new Date(event.date).toLocaleDateString("sv-SE", {
      weekday: "short",
      day: "numeric",
      month: "long",
      hour: "numeric",
      minute: "numeric"
    })
    const rsvp = new Date(event.rsvp).toLocaleDateString("sv-SE", {
      weekday: "short",
      day: "numeric",
      month: "long"
    })
    const content = `<body style="margin: 0; padding: 30px 0; width: 100%; background-color: #fbf7ee; background-image: ${
      event.image
      }">
        <div style="padding: 30px 50px 50px; text-align: center; background: #fff; max-width: 600px; margin: 0 auto 15px; box-shadow: 0 0 5px 0px rgba(0,0,0,0.4)">
          <img src="http://i.imgur.com/Rkdv6ca.png" alt="Välkommen på kalas" style="width: 80%; height: auto" />
          <h1 style="font-weight: bold; color: #6C80C5; text-transform: uppercase">Hurra, ditt kalas <span style="text-transform: none;">${
      event.link
      }</span> är nu skapat!</h1>
          <h4 style="font-weight: bold;">Klicka på knappen nedan för att gå direkt till kalaset eller klicka <a href="${window
        .location.origin +
      "/bekraftelse/" +
      event.link}">här</a> för att bjuda in gästerna.</h4>
          <h4 style="font-weight: bold; margin-bottom: 50px">Lösenord för kalaset: <span style="color: #6C80C5">${
      this.props.guestUser.password
      }</span></h4>

          <a href="${window.location.origin +
      "/kalas/" +
      event.link}" style="word-wrap: none; text-decoration: none; font-size: 16px; font-weight: bold; background: #6C80C5; color: #fff; padding: 15px 30px; border-radius: 100px; opacity: 0.8; margin: 20px 0">TILL KALASET</a>
        </div>
        <div style="padding: 20px 50px; background: #fff; max-width: 600px; margin: 0 auto 15px; box-shadow: 0 0 5px 0px rgba(0,0,0,0.4)">
          <h3 style="font-weight: bold; margin-bottom: 48px;">Sammanfattning</h3>
          <h4 style="font-weight: bold">Kalas</h4>
          <p>Rubrik: <span style="font-weight: bold;">${event.title}</span></p>
          <p>Födelsedagsbarn: <span style="font-weight: bold;">${
      event.child
      }</span></p>
          <p>Fyller: <span style="font-weight: bold;">${event.age}</span> år</p>
          <p>Beskrivning: <span style="font-weight: bold;">${
      event.desc
      }</span></p>
          <p>Datum & tid: <span style="font-weight: bold;">${date}</span></p>
          <p>OSA: <span style="font-weight: bold;">${rsvp}</span></p>
          <h4 style="font-weight: bold: margin-top: 48px;">Plats</h4>
          <p>Gata/plats: <span style="font-weight: bold;">${
      event.location.street
      }</span></p>
          <p>Postkod: <span style="font-weight: bold;">${
      event.location.zipcode
      }</span></p>
          <p>Stad: <span style="font-weight: bold;">${
      event.location.city
      }</span></p>
          <h4 style="font-weight: bold: margin-top: 48px;">Present</h4>
          <p>Present: <span style="font-weight: bold;">${
      event.product.name
      }</span></p>
          <p>Pris: <span style="font-weight: bold;">${
      event.product.price
      }</span></p>
          <p>Swishbelopp: <span style="font-weight: bold;">${
      event.swish.amount
      }</span></p>
          <p>Info: <span style="font-weight: bold;">${
      event.product.desc
      }</span></p>
          ${
      event.donate
        ? `<h4 style="font-weight: bold: margin-top: 48px;">Karma</h4>
          <p>Organisation: <span style="font-weight: bold;">${
        event.fundraiser.name
        }</span></p>
          <p>Info: <span style="font-weight: bold;">${
        event.fundraiser.desc
        }</span></p>`
        : ""
      }
          <h4 style="font-weight: bold: margin-top: 48px;">Personuppgifter</h4>
          <p>Förnamn: <span style="font-weight: bold;">${
      event.guestUser.firstName
      }</span></p>
          <p>Efternamn: <span style="font-weight: bold;">${
      event.guestUser.lastName
      }</span></p>
          <p>E-post: <span style="font-weight: bold;">${
      event.guestUser.email
      }</span></p>
          <p>Telefonnummer: <span style="font-weight: bold;">${
      event.guestUser.phoneNumber
      }</span></p>
          <p>Gata: <span style="font-weight: bold;">${
      event.guestUser.address
      }</span></p>
          <p>Postnummer: <span style="font-weight: bold;">${
      event.guestUser.zipcode
      }</span></p>
          <p>Stad: <span style="font-weight: bold;">${
      event.guestUser.city
      }</span></p>
        </div>
        <div style="padding: 20px 50px; background: #fff; max-width: 600px; margin: 0 auto; box-shadow: 0 0 5px 0px rgba(0,0,0,0.4)">
          <h4 style="font-weight: bold">Vad är Tojj?</h4>
          <p>Ingen mer stress kopplad till kalasfirande! Hos Tojj kan man skapa en digital kalasinbjudan och låta de inbjudna gästerna bidra till en bestämd present till födelsedagsbarnet. Enkelt för alla och som grädde på moset kan man välja att bidra till en välgörenhet.</p>
          <a href="${
      window.location.origin
      }" style="text-decoration: none; color: #6C80C5">Läs mer ></a>
        </div>
      </body>`

    this.sendEmail(event.guestUser.email, content, event.title)
  }
  sendEmail = (email, message, subject) => {
    fetch("/api/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        subject: `Bekräftelse för kalas: ${subject}`,
        message: message
      })
    })
      .then(res => res.json())
      .then(res => {
        console.log("here is the response: ", res)
      })
      .catch(err => {
        console.error("here is the error: ", err)
      })
  }
  /**
   * Link will be equal to the first 2 letters of the
   * birthday child's name, uppercased. Followed by the age
   * they will turn and 3 random symbols.
   */

  generateLink = () => {
    let link = []
    const name = this.props.birthdayEvent.bName
    link.push(name.slice(0, 2).toUpperCase())
    link.push(this.props.birthdayEvent.cAge)

    let saltArray =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    saltArray = saltArray.split("")
    let salt = ""
    for (let i = 0; i < 3; i++) {
      let letter = saltArray[Math.floor(Math.random() * saltArray.length)]
      salt = salt + letter
    }
    link.push(salt)
    link = link.join("")
    this.setState({ eventLink: link })
    return link
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  /**
   * Modal that is shown if there is any errors in the array.
   * The errors gets added from the validation.
   */
  superModal = () => {
    const { errors } = this.state
    const allErrors = errors.map((error, i) => (
      <li key={"validation_error_" + i}>{error}</li>
    ))

    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className="validation-modal"
        >
          <ModalHeader className="modalHeader" toggle={this.toggle}>
            Fel har uppstått
          </ModalHeader>
          <ModalBody className="modalBody">
            <ul>{allErrors}</ul>
          </ModalBody>
          <ModalFooter className="modalFooter">
            <Button
              className="cpp-modal-button"
              color="secondary"
              onClick={this.toggle}
            >
              Stäng
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  render() {
    return (
      <div className="createpartypage-wrapper">
        <FormContainer />
        <Buttons createEvent={this.validateAll} />
        <div style={{ padding: "0 5vw" }}>
          <p
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
              fontWeight: "600",
              fontSize: "1.2rem",
              color: "#444655",
              fontFamily: "Montserrat",
              margin: "0 auto 80px",
              display: "block",
              padding: "30px",
              border: "5px dotted #B164B8"
            }}
          >
            Genom att klicka på "Godkänn" så ingår du i ett avtal med Tojj och
            pengarna som eventuellt samlas in kommer att hanteras av Tojj. Läs
            mer på{" "}
            <a href="/avtal" style={{ color: "#B164B8" }}>
              användaravtal och villkor
            </a>
            .
          </p>
        </div>
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
    swish: state.swish,
    guestUser: state.birthday.guestUser,
    agreement: state.agreement
  }
}

export default connect(mapStateToProps)(CreatePartyPage)
