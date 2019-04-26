import React from 'react'
import { Link } from 'react-router-dom'
import REST from '../../REST'

import MapsGen from './MapsGen/index'
import AttendingsList from './AttendingsList/index'

class Event extends REST { }

class PartyPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: null
    }
  }

  componentDidMount() {
    const eventLink = this.props.match.params.link
    this.findEventAndMatchWithDB(eventLink)
      .then(data => {
        this.setState({
          event: data,
        })
      })
  }

  async findEventAndMatchWithDB(eventLink) {
    const events = await Event.find(`.find().populate('product').populate('fundraiser').populate('user').exec()`)
    const found = await events.find(event => { return event.link === eventLink })
    return found
  }

  render() {
    let content = ''
    if (!this.state.event) {
      content = <div style={{ minHeight: '80vh', width: '100%', background: 'red' }}>
        <h2 style={{ color: 'white', height: '100%' }}>Sorry, detta kalaset finns inte. Om du vill skapa ett nytt kalas, <Link to="/skapa-kalas">klicka här</Link></h2>
      </div>
    } else {
      let party = this.state.event

      /**
       * Joining all the address information to the right format in order to send the correct props to MapsGen
       */

      let address = party.location.street.split(' ')
      address = address.join('%20')
      address = [address, party.location.zipcode, party.location.city].join('%20')

      /**
      * Saving the date in an array in order to split it up into multiple lines
      */
     
      let date = new Date(party.date).toLocaleDateString('sv-SE', { weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' }).split(" ")

      content = <div style={{ background: party.image }} className="party-bg">
        <div className="party-card">
          <div className="box-container party-title">
            <div className="box">
              <p>{party.title}</p>
            </div>
          </div>
          <div className="box-container party-info border-top">
            <div className="box">
              <p className="party-child-age">{party.child} fyller {party.age} år!</p>
              <p className="party-description">{party.desc}</p>
            </div>
            <div className="box date-holder">
              <p className="party-weekday">{date[0]}</p>
              <p className="party-date">Den {date[1]} {date[2]}</p>
              <p className="party-time">kl {date[3]}</p>
            </div>
          </div>
          <div className="box-container border-top print-me">
            <div className="box">
              <img src="/images/card.png" alt="" />
              <p>Ta gärna med ett fint kort!</p>
            </div>
            <div className="box">
              <img src="/images/card.png" alt="" />
              <p>Skanna denna koden för att komma till kalaset.</p>
            </div>
          </div>
          <div className="box-container border-top party-payment no-print">
            <div className="box swish-holder">
              <div className="qr-code box-img" style={{ background: party.swish.color }}>
                <img src={party.swish.image} className="img-fluid" alt="qr-code" />
              </div>
              <p>Swish</p>
              <p>Skanna koden ovan med hjälp av swish-appen eller swisha {party.swish.amount} kronor till {party.swish.number}.</p>
              <a href="/fragor-och-svar#betalningar" target="_blank" rel="noopener noreferrer">Läs mer...</a>
            </div>
            <div className="box toy-holder">
              <div className="box-img">
                <img src={party.product.image} className="img-fluid" alt="qr-code" />
              </div>
              <p>Present</p>
              <p>Pengarna som samlas in kommer att gå till att köpa {party.product.name} som {party.child} önskar sig.</p>
              <a href={party.product.link} target="_blank" rel="noopener noreferrer">Läs mer...</a>
            </div>
            {party.donate
              ? <div className="box karma-holder">
                <div className="box-img">
                  <img src={party.fundraiser.image} className="img-fluid" alt="fundraiser" />
                </div>
                <p>Överskott</p>
                <p>Eventuellt överskott har vi valt att skänka direkt till {party.fundraiser.name}. Om du vill veta mer om organisationen kan du klicka nedan.</p>
                <a href={party.fundraiser.link} target="_blank" rel="noopener noreferrer">Läs mer...</a>
              </div>
              : null}
          </div>
          <div className="box-container party-congratulation border-top no-print">
            <div className="box">
              <p>Egna presenter undanbedes i första hand på grund av miljön. Men {party.child} hade verkligen uppskattat om man tog med sig ett fint grattis-kort på denna speciella dag!</p>
              <a href="/fragor-och-svar#egna-presenter" target="_blank" rel="noopener noreferrer">Läs mer...</a>
            </div>
            <div className="box">
              <figure>
                <img className="box-img" src="/images/card.png" alt="birthday-card"/>
              </figure>
            </div>
          </div>
          <div className="box-container party-attending border-top no-print">
            <div className="box attending-holder">
              <p>Hoppas ni kan komma, det gör i alla fall vi:</p>
              <AttendingsList attendees={party.attending} event={party._id} />
            </div>
          </div>
          <div className="box-container border-top party-location">
            <div className="box maps-holder">
              <MapsGen query={address} />
            </div>
            <div className="box location-holder">
              <p className="party-street">{party.location.street}</p>
              <p className="party-zip-city">{party.location.zipcode} {party.location.city}</p>
              <p className="party-rsvp">OSA senast <br /> {new Date(party.rsvp).toLocaleDateString('sv-SE', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
            </div>
          </div>
        </div>
      </div >
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default PartyPage