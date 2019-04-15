import React, { Component } from "react"

class Web_shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active1: 0,
      active2: 0,
      active3: 0,
      active4: 0,
      active5: 0,
      active6: 0,
      presentInfo: false
    }
    this.toggleClass = this.toggleClass.bind(this)
    this.toggleInfo = this.toggleInfo.bind(this)
  }

  toggleClass(i) {
    for (let i = 1; i < 7; i++) {
      let loopIndex = "active" + i
      this.setState({ [loopIndex]: 0 })
    }
    if (this.state[i] === 0) {
      this.setState({ [i]: 1 })
    } else {
      this.setState({ [i]: 0 })
    }
  }

  toggleInfo() {
    const currVal = this.state.presentInfo
    this.setState({ presentInfo: !currVal })
  }

  render() {
    return (
      <div className="webshop-container">
        <h2 className="form-headline charity-headline text-center">
          Välj present
        </h2>
        <div className="shop-item-container">
          <div
            className={this.state.active1 ? "shop-item-border" : "shop-item"}
            id="1"
            onClick={e => this.toggleClass("active1", e)}
          >
            <div className={this.state.active1 ? "shop-item-overlay" : ""} />
            <div className={this.state.active1 ? "shop-item-checkmark" : ""} />
            <img className="shop-img" src="/images/elefant.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>
          <div
            className={this.state.active2 ? "shop-item-border" : "shop-item"}
            id="1"
            onClick={e => this.toggleClass("active2", e)}
          >
            <div className={this.state.active2 ? "shop-item-overlay" : ""} />
            <div className={this.state.active2 ? "shop-item-checkmark" : ""} />
            <img className="shop-img" src="/images/hippo.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>
          <div
            className={this.state.active3 ? "shop-item-border" : "shop-item"}
            id="1"
            onClick={e => this.toggleClass("active3", e)}
          >
            <div className={this.state.active3 ? "shop-item-overlay" : ""} />
            <div className={this.state.active3 ? "shop-item-checkmark" : ""} />
            <img className="shop-img" src="/images/zebra.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>
          <div
            className={this.state.active4 ? "shop-item-border" : "shop-item"}
            id="1"
            onClick={e => this.toggleClass("active4", e)}
          >
            <div className={this.state.active4 ? "shop-item-overlay" : ""} />
            <div className={this.state.active4 ? "shop-item-checkmark" : ""} />
            <img className="shop-img" src="/images/elefant.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>

          <div
            className={this.state.active5 ? "shop-item-border" : "shop-item"}
            id="1"
            onClick={e => this.toggleClass("active5", e)}
          >
            <div className={this.state.active5 ? "shop-item-overlay" : ""} />
            <div className={this.state.active5 ? "shop-item-checkmark" : ""} />
            <img className="shop-img" src="/images/hippo.png" alt="event" />
            <div className="shop-info">
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
            </div>
          </div>
          <div
            className={this.state.active6 ? "shop-item-border" : "shop-item"}
            id="1"
            onClick={e => this.toggleClass("active6", e)}
          >
            <div className={this.state.active6 ? "shop-item-overlay" : ""} />
            <div className={this.state.active6 ? "shop-item-checkmark" : ""} />
            {this.state.presentInfo ? (
              <div className="test-container">
                <p>Kay Bojesen Flodhäst Träleksak</p>
                <p>Kay Bojesen Flodhäst Träleksak</p>
                <p>Kay Bojesen Flodhäst Träleksak</p>
                <p>
                  Pris: 1000kr <label onClick={this.toggleInfo}>Mer info</label>
                </p>
              </div>
            ) : (
              <div className="test-container">
                <img className="shop-img" src="/images/zebra.png" alt="event" />
                <div className="shop-info">
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>
                    Pris: 1000kr{" "}
                    <label onClick={this.toggleInfo}>Mer info</label>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Web_shop
