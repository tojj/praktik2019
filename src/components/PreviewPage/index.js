import React, { Component } from "react"
import { connect } from "react-redux"
import MapsGen from "../PartyPage/MapsGen/index"
import { Link } from "react-router-dom"

class PreviewPage extends Component {

  /**
   * Due to safari bug with Object.keys and redux together
   * We had to sort our map rendering methods which is 
   * Why we chose variable names to begin with a, b, c and so on.
   */
  render() {
    let date =
      this.props.birthdayTimeAndPlace.bDate +
      " " +
      this.props.birthdayTimeAndPlace.cTime
    date = new Date(date).getTime()
    date = new Date(date)
      .toLocaleDateString("sv-SE", {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric"
      })
      .split(" ")

    /**
     * Joining all the address information to the right format in order to send the correct props to MapsGen
     */

    let address = this.props.birthdayTimeAndPlace.dStreet.split(" ")
    address = address.join("%20")
    address = [
      address,
      this.props.birthdayTimeAndPlace.eZip,
      this.props.birthdayTimeAndPlace.fCity
    ].join("%20")

    return (
      <div
        style={{ backgroundImage: `url(${this.props.birthdayImage})` }}
        className="party-bg"
      >
        <div className="party-card">
          <div className="box-container party-title">
            <div className="box">
              <p>{this.props.birthdayEvent.aTitle}</p>
            </div>
          </div>
          <div className="box-container party-info border-top">
            <div className="box">
              <p className="party-child-age">
                {this.props.birthdayEvent.bName} fyller{" "}
                {this.props.birthdayEvent.cAge} år!
              </p>
              <p className="party-description">
                {this.props.birthdayTimeAndPlace.aDescription}
              </p>
            </div>
            <div className="box date-holder">
              <p className="party-weekday">{date[0]}</p>
              <p className="party-date">
                Den {date[1]} {date[2]}
              </p>
              <p className="party-time">kl {date[3]}</p>
            </div>
          </div>
          <div className="box-container border-top party-payment no-print">
            <div className="box swish-holder">
              <div className="qr-code box-img" style={{background: '#6C80C5'}}>
                <img src={"http://betalamedswish.se/API/Get/?n=0709629276&a=1337&m=FÖRHANDSVISNING&la=true&lm=true&s=500"} className="img-fluid" alt="qr-code" />
              </div>
              <p>Swish</p>
              <p>
                Skanna koden ovan med hjälp av swish-appen för att betala{" "}
                {this.props.swishMoney} kronor av presenten
              </p>
            </div>
            <div className="box toy-holder">
              <div className="box-img">
                <img src={this.props.present.image} className="img-fluid" alt="qr-code" />
              </div>
              <p>Present</p>
              <p>
                Pengarna som samlas in kommer att gå till att köpa {this.props.present.name} som{" "}
                {this.props.birthdayEvent.bName} önskar sig.
              </p>
              <a href={this.props.present.link} target="_blank" rel="noopener noreferrer">
                Läs mer...
              </a>
            </div>

            {this.props.fundraiser.donate ? <div className="box karma-holder">
              <div className="box-img">
                <img src={this.props.fundraiser.image} className="img-fluid" alt="fundraiser" />
              </div>
              <p>Överskott</p>
              <p>
                Eventuellt överskott har vi valt att skänka direkt till {this.props.fundraiser.name}.
                Om du vill veta mer om organisationen kan du klicka nedan.
                </p>
              <a
                href={this.props.fundraiser.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Läs mer...
                </a>
            </div> : null }

          </div>
          <div className="box-container party-attending border-top no-print">
            <div className="box attending-holder">
              <p>Hoppas ni kan komma, det gör i alla fall vi:</p>
            </div>
          </div>
          <div className="box-container border-top party-location">
            <div className="box maps-holder">
              <MapsGen query={address} />
            </div>
            <div className="box location-holder">
              <p className="party-street">
                {this.props.birthdayTimeAndPlace.dStreet}
              </p>
              <p className="party-zip-city">
                {this.props.birthdayTimeAndPlace.eZip} {this.props.birthdayTimeAndPlace.fCity}
              </p>
              <p className="party-rsvp">
                OSA senast <br />
                {new Date(
                  this.props.birthdayTimeAndPlace.gDeadline
                ).toLocaleDateString("sv-SE", {
                  weekday: "long",
                  day: "numeric",
                  month: "long"
                })}
              </p>
            </div>
          </div>
          <div className="buttons-container-prepp">
            <Link to="/skapa-kalas" className="link-cancel-prepp">
              Tillbaka
            </Link>
          </div>
        </div>
      </div >
    )
  }
}

const mapStateToProps = state => {
  return {
    birthdayEvent: state.birthday.birthdayEvent,
    birthdayImage: state.birthday.birthdayImage,
    birthdayTimeAndPlace: state.birthday.birthdayTimeAndPlace,
    fundraiser: state.birthday.fundraiser,
    present: state.birthday.present
  }
}

export default connect(mapStateToProps)(PreviewPage)
