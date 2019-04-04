import React from "react"
import staticData from "../../../../staticData"
import { Link } from "react-router-dom"

const Form_header = props => (
  <div className="form-header-container">
    <div className="box-container">
      <div className="box" />
      <Link to="/skapa-kalas" className="link-cancel">
        Avbryt
      </Link>
      <Link to="/skapa-kalas" className="link-party-page">
        Godkänn
      </Link>
      <div className="box" />
    </div>
  </div>
)

export default Form_header
