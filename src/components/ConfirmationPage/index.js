import React from 'react'
import { Minus } from 'react-feather'
import BirthdayInvite from '../BirthdayInvite'

class ConfirmationPage extends React.Component {

  redirectToYourParty = () => {
    let url = window.location.pathname.split("/")
    this.props.history.push("/kalas/" + url[2])
  }

  render() {


    return (
      <div>
        <div className="conf-wrapper bg-white">
          <h1 className="conf-headline">Grattis ditt kalas är skapat!</h1>
          <p className="conf-info"><Minus />Nedanstående kan du bjuda in personer till kalaset, detta är givetvis valfritt. </p>
        </div>
        <div className="bday-invite-wrapper bg-white">
          <BirthdayInvite />
          <button onClick={this.redirectToYourParty} className="link-party-page conf-button">Tryck här för att komma till kalaset!</button>
        </div>
      </div>
    )
  }
}

export default ConfirmationPage



