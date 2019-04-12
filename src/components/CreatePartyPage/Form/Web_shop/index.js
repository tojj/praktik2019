import React, { Component } from "react"

class Web_shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.toggleClass = this.toggleClass.bind(this)
  }

  toggleClass() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render() {
    return (
      <div className="webshop-container">
        <h2 className="form-headline charity-headline text-center">
          Välj present
        </h2>
        <div className="shop-item-container">
          <div className="shop-item" onClick={this.toggleClass}>
            <div className={this.state.active ? "shop-item-overlay" : ""} />
            <div className={this.state.active ? "shop-item-checkmark" : ""} />
            <img className="shop-img" src="/images/elefant.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>
          <div className="shop-item" onClick={this.toggleClass}>
            <div className={this.state.active ? "shop-item-overlay" : ""} />
            <div className={this.state.active ? "shop-item-checkmark" : ""} />
            <img className="shop-img" src="/images/elefant.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>
          <div className="shop-item" onClick={this.toggleClass}>
            <div className={this.state.active ? "shop-item-overlay" : ""} />
            <div className={this.state.active ? "shop-item-checkmark" : ""} />
            <img className="shop-img" src="/images/elefant.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>

          <div className="shop-item">
            <img className="shop-img" src="/images/elefant.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>
          <div className="shop-item">
            <img className="shop-img" src="/images/elefant.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>
          <div className="shop-item">
            <img className="shop-img" src="/images/elefant.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Web_shop
