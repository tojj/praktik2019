import React from "react"
import axios from "axios";
import { Printer } from 'react-feather'
import MissingPage from "../MissingPage/index"
import MapsGen from "./MapsGen/index"
import AttendingsList from "./AttendingsList/index"
import SwishCode from "../SwishCode"

class PartyPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: null,
      loaded: false
    }
  }

  componentDidMount() {
    const eventLink = this.props.match.params.link
    this.findEventAndMatchWithDB(eventLink).then(data => {
      this.setState({
        event: data,
        loaded: true
      })
      document.title = `Tojj - ${data ? data.title : 'Sidan saknas'}`
    })
  }

  async findEventAndMatchWithDB(eventLink) {
    const events = await axios({
      method: 'get',
      url: '/api/events/populated'
    })

    const found = await events.data.find(event => {
      return event.link === eventLink
    })
    return found
  }

  render() {
    let content = ""
    if (!this.state.loaded) {
      content = (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
    }
    if (!this.state.event && this.state.loaded) {
      content = (
        <MissingPage
          link="/skapa-kalas"
          linkName="Skapa nytt kalas"
          title="Kalaset finns inte"
        />
      )
    } else if (this.state.event && this.state.loaded) {
      let party = this.state.event
      
      /**
       * Joining all the address information to the right format in order to send the correct props to MapsGen
       */

      let address = party.location.street.split(" ")
      address = address.join("%20")
      address = [address, party.location.zipcode, party.location.city].join(
        "%20"
      )

      /**
       * Saving the date in an array in order to split it up into multiple lines
       */

      let date = new Date(party.date)
        .toLocaleDateString("sv-SE", {
          weekday: "long",
          day: "numeric",
          month: "long",
          hour: "numeric",
          minute: "numeric"
        })
        .split(" ")

      content = (
        <div style={{ background: party.image }} className="party-bg">
          <div className="party-card">
            <p className="no-print" onClick={window.print} style={{ display: 'inline-block', margin: '5px', cursor: 'pointer' }}><Printer /></p>
            <div className="box-container party-title">
              <div className="box">
                <p>{party.title}</p>
              </div>
            </div>
            <div className="box-container party-info border-top">
              <div className="box no-print">
                <p className="party-child-age">
                  {party.child} fyller {party.age} år!
                </p>
                <p className="party-description">{party.desc}</p>
              </div>
              <div className="box date-holder">
                <p className="party-weekday">{date[0]}</p>
                <p className="party-date">
                  Den {date[1]} {date[2]}
                </p>
                <p className="party-time">kl {date[3]}</p>
              </div>
              <div className="box print-me">
                <p>Scanna koden för att komma direkt till kalaset. Glöm inte att meddela om du kommer!</p><br />
                <img src={"http://chart.apis.google.com/chart?cht=qr&chs=500x500&chl=https://tojj.herokuapp.com/kalas/" + party.link + "&chld=H|0"} className="party-qr" alt="qr link to party" />
              </div>
            </div>
            <div className="print-me">
              <p className="help-text">Tojj.se är ett verktyg för att anordna kalas och inbjudningar. Vid frågor eller funderingar besök <a href="https://tojj.herokuapp.com/vanliga-fragor">https://tojj.herokuapp.com/vanliga-fragor</a>

              </p>
            </div>
            <div className="box-container border-top party-payment no-print">
              <div className="box swish-holder">
                <div className="qr-code box-img">
                  <SwishCode payee={party.swish.number} amount={party.swish.amount} message={party.link} />
                </div>
                <p>Swish</p>
                <p>
                  Skanna koden ovan med hjälp av swish-appen för att betala {party.swish.amount} kronor av presenten.
                </p>
                <a
                  href="/vanliga-fragor/avtal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Läs mer...
                </a>
              </div>
              <div className="box toy-holder">
                <div className="box-img">
                  <img
                    src={party.product.image}
                    className="img-fluid"
                    alt="present bild"
                  />
                </div>
                <p>Present</p>
                <p>
                  Pengarna som samlas in kommer att gå till att köpa {party.product.name} som {party.child} önskar sig.
                </p>
                <a
                  href={party.product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Läs mer...
                </a>
              </div>
              {party.donate ? (
                <div className="box karma-holder">
                  <div className="box-img">
                    <img
                      src={party.fundraiser.image}
                      className="img-fluid"
                      alt="fundraiser"
                    />
                  </div>
                  <p>Överskott</p>
                  <p>
                    Eventuellt överskott har vi valt att skänka direkt till {party.fundraiser.name}. Om du vill veta mer om
                    organisationen kan du klicka nedan.
                  </p>
                  <a
                    href={party.fundraiser.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Läs mer...
                  </a>
                </div>
              ) : null}
            </div>
            <div className="box-container party-congratulation border-top no-print">
              <div className="box">
                <p>
                  Tänk på miljön - tänk på andra. Undvik att ta med en egen present men skänk gärna till en välgörenhet eller ta med ett eget grattis-kort till {party.child}. Det finaste man kan ge är ju trots allt till andra.
                </p>
                <a
                  href="/vanliga-fragor/presenter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Läs mer...
                </a>
              </div>
              <div className="box">
                <figure>
                  <img
                    style={{ width: '80%', height: 'auto' }}
                    src="/images/card.png"
                    alt="birthday-card"
                  />
                </figure>
              </div>
            </div>
            <div className="box-container party-attending border-top no-print">
              <div className="box attending-holder">
                <p>Hoppas ni kan komma, det gör i alla fall vi:</p>
                <AttendingsList attendees={party.attending} event={party._id} />
              </div>
            </div>
            <div className="box-container border-top party-location no-print">
              <div className="box maps-holder">
                <MapsGen query={address} />
              </div>
              <div className="box location-holder">
                <p className="party-street">{party.location.street}</p>
                <p className="party-zip-city">
                  {party.location.zipcode} {party.location.city}
                </p>
                <p className="party-rsvp">
                  OSA senast <br />{" "}
                  {new Date(party.rsvp).toLocaleDateString("sv-SE", {
                    weekday: "long",
                    day: "numeric",
                    month: "long"
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    }
    return <div>{content}</div>
  }
}

export default PartyPage
