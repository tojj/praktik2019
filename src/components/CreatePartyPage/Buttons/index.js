import React from "react"
import { Link } from "react-router-dom"

const Buttons = props => {
  return (
    <div className="buttons-container">
      <div className="buttons-row2">
      <Link to="/kalas-förhandsvisning" className="link-preview-page">
          Förhandsgranska
        </Link>
        <button className="link-party-page" onClick={props.createEvent}>
          Godkänn
        </button>
      </div>
    </div>
  )
}

export default Buttons
