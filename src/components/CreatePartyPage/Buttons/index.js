import React from 'react'
import { Link } from "react-router-dom"

const Buttons = (props) => {
  return (
    <div className="buttons-container">
      <Link
        to="/kalas-förhandsvisning"
        className="link-party-page">
        Förhandsgranska
      </Link> <br />
      <Link
        to="/"
        className="link-cancel">
        Avbryt
      </Link>
      <button
        className="link-party-page"
        onClick={props.createEvent}>
        Godkänn
      </button>
      
    </div>
  )
}

export default Buttons