import React, { Component } from 'react'
import { connect } from 'react-redux'

class PreviewPage extends Component {

  render() {

    return (
      <div className="preview-container">
        <h1 className="birthday-kid">STATE FYLLER STATE ÅR</h1>
        <div className="information-wrapper">
          <div className="desc-state">Description state</div>
          <div className="date-state">Datum states</div>
        </div>

        <div className="swish-wrapper">
          <div className="swish-child">QR Logo</div>
          <div className="swish-child">Swish State Info</div>
          <div className="swish-child">Karma</div>
        </div>

        <div className="map-wrapper">
          <div className="map-child">Google maps</div>
          <div className="map-child">Adress och OSA States</div>
        </div>
      </div>
    )
  }
}

export default PreviewPage