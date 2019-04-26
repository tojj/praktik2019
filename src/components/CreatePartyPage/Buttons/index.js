import React from 'react'
import { Link } from "react-router-dom"

const Buttons = (props) => {
  return (
    <div className="buttons-container">
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
      <Link
        to="/kalas-förhandsvisning"
        className="link-party-page">
        Förhandsgranska
      </Link>
      
    </div>
  )
}

export default Buttons