import React, { Component } from "react"

class MissingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="mp-container">
        <h1 className="mp-header">Sidan saknas</h1>
        <h4 className="mp-info">
          Vi kunde tyvärr inte hitta sidan {this.props.location.pathname}
        </h4>
        <img className="mp-background" src="/images/missingPageImg.png" />
      </div>
    )
  }
}
export default MissingPage
