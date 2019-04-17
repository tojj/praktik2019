import React, { Component } from "react"

class MissingPage extends React.Component {
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
        {this.props.partyPage ? (
          <div>
            <h4 className="mp-info">Vi kunde tyvärr inte hitta kalaset</h4>
            <h4 className="mp-info">Gå vidare till skapa kalas-sidan</h4>
          </div>
        ) : null}
        <img className="mp-img" src="/images/sadpepe.png" />
      </div>
    )
  }
}
export default MissingPage
