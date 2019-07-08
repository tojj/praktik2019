import React from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronsRight } from 'react-feather'

class GDPR extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      acceptedGdpr: false,
    }
  }

  componentDidMount() {
    this.sessionAlreadyAccepted()
  }

  /**
   * Function to check if user already accepted
   * The terms for the website.
   */
  sessionAlreadyAccepted() {
    let trace = localStorage.getItem('gdpr')
    if (trace === window.localStorage.gdpr) {
      this.setState({ acceptedGdpr: true })
    }
  }

  /**
   * Changes state if session is accepted.
   */
  sessionAccepted = () => {
    this.sessionForModal()
    this.setState({ acceptedGdpr: true })
    this.props.toggle()
  }

  /**
   * Creating a token for the session.
   */
  sessionForModal() {
    let token = []
    let tokenArray =
      "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    tokenArray = tokenArray.split("")
    let tokn = ""
    for (let i = 0; i < 30; i++) {
      let letter = tokenArray[Math.floor(Math.random() * tokenArray.length)]
      tokn = tokn + letter
    }
    token.push(tokn)
    token = token.join("")
    localStorage.setItem('gdpr', token)
  }

  render() {
    return (
      this.state.acceptedGdpr ? null : <div className="gdpr-modal">
        <p className="gdpr-text">Tojj sparar viss data för att ge dig en bättre upplevelse. Genom att använda Tojj's tjänster godkänner du detta. 
        <NavLink
            to={"/avtal"}
            activeStyle={{ fontWeight: "bold" }}
            className="avtal-link gdpr-margin" >
           <ChevronsRight /> Om cookies, avtal och personuppgifter.
          </NavLink></p>
        <button className="gdpr-button" onClick={this.sessionAccepted} >Jag förstår</button>
      </div>
    )
  }
}

export default GDPR;

