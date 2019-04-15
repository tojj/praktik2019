import React, { Component } from 'react'
import { connect } from 'react-redux'

class PreviewPage extends Component {




  render() {

    console.log(this.props)

    return (
      <div className="background-wrapper">
        <div className="preview-container">
          <h1 className="birthday-kid"> {this.props.birthdayEvent.title}</h1>
          <div className="information-wrapper">
            <div className="desc-state">
              <h2>{this.props.birthdayEvent.name} FYLLER {this.props.birthdayEvent.age} ÅR</h2>
              <p>Desc State</p>
            </div>
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
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    birthdayEvent: state.birthday.birthdayEvent
  }
}

export default connect(mapStateToProps)(PreviewPage)
