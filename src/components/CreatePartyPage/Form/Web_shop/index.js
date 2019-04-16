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
      presentInfo1: false,
      presentInfo2: false,
      presentInfo3: false,
      presentInfo4: false,
      presentInfo5: false,
      presentInfo6: false
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

  toggleInfo(i) {
    const currVal = this.state[i]
    this.setState({ [i]: !currVal })
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
          >
            <div className={this.state.active1 ? "shop-item-overlay" : ""} />
            <div
              className={this.state.active1 ? "shop-item-checkmark" : ""}
              onClick={e => this.toggleClass("active1", e)}
            />
            {this.state.presentInfo1 ? (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo1", e)}
                >
                  >
                </label>
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active1", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Pris: 1000kr</p>
                  <div className="more-info-container" />
                </div>
              </div>
            ) : (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo1", e)}
                >
                  >
                </label>
                <img
                  className="shop-img"
                  src="/images/elefant.png"
                  alt="event"
                  onClick={e => this.toggleClass("active1", e)}
                />
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active1", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>
                    Pris: 1000kr <div className="more-info-container" />
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className={this.state.active2 ? "shop-item-border" : "shop-item"}
            id="1"
          >
            <div className={this.state.active2 ? "shop-item-overlay" : ""} />
            <div
              className={this.state.active2 ? "shop-item-checkmark" : ""}
              onClick={e => this.toggleClass("active2", e)}
            />
            {this.state.presentInfo2 ? (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo2", e)}
                >
                  >
                </label>
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active2", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Pris: 1000kr</p>
                  <div className="more-info-container" />
                </div>
              </div>
            ) : (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo2", e)}
                >
                  >
                </label>
                <img
                  className="shop-img"
                  src="/images/hippo.png"
                  alt="event"
                  onClick={e => this.toggleClass("active2", e)}
                />
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active2", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>
                    Pris: 1000kr <div className="more-info-container" />
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className={this.state.active3 ? "shop-item-border" : "shop-item"}
            id="1"
          >
            <div className={this.state.active3 ? "shop-item-overlay" : ""} />
            <div
              className={this.state.active3 ? "shop-item-checkmark" : ""}
              onClick={e => this.toggleClass("active3", e)}
            />
            {this.state.presentInfo3 ? (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo3", e)}
                >
                  >
                </label>
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active3", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Pris: 1000kr</p>
                  <div className="more-info-container" />
                </div>
              </div>
            ) : (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo3", e)}
                >
                  >
                </label>
                <img
                  className="shop-img"
                  src="/images/zebra.png"
                  alt="event"
                  onClick={e => this.toggleClass("active3", e)}
                />
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active3", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>
                    Pris: 1000kr <div className="more-info-container" />
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className={this.state.active4 ? "shop-item-border" : "shop-item"}
            id="1"
          >
            <div className={this.state.active4 ? "shop-item-overlay" : ""} />
            <div
              className={this.state.active4 ? "shop-item-checkmark" : ""}
              onClick={e => this.toggleClass("active4", e)}
            />
            {this.state.presentInfo4 ? (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo4", e)}
                >
                  >
                </label>
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active4", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Pris: 1000kr</p>
                  <div className="more-info-container" />
                </div>
              </div>
            ) : (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo4", e)}
                >
                  >
                </label>
                <img
                  className="shop-img"
                  src="/images/elefant.png"
                  alt="event"
                  onClick={e => this.toggleClass("active4", e)}
                />
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active4", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>
                    Pris: 1000kr <div className="more-info-container" />
                  </p>
                </div>
              </div>
            )}
          </div>

          <div
            className={this.state.active5 ? "shop-item-border" : "shop-item"}
            id="1"
          >
            <div className={this.state.active5 ? "shop-item-overlay" : ""} />
            <div
              className={this.state.active5 ? "shop-item-checkmark" : ""}
              onClick={e => this.toggleClass("active5", e)}
            />
            {this.state.presentInfo5 ? (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo5", e)}
                >
                  >
                </label>
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active5", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Pris: 1000kr</p>
                  <div className="more-info-container" />
                </div>
              </div>
            ) : (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo5", e)}
                >
                  >
                </label>
                <img
                  className="shop-img"
                  src="/images/hippo.png"
                  alt="event"
                  onClick={e => this.toggleClass("active5", e)}
                />
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active5", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>
                    Pris: 1000kr <div className="more-info-container" />
                  </p>
                </div>
              </div>
            )}
          </div>
          <div
            className={this.state.active6 ? "shop-item-border" : "shop-item"}
            id="1"
          >
            <div className={this.state.active6 ? "shop-item-overlay" : ""} />
            <div
              className={this.state.active6 ? "shop-item-checkmark" : ""}
              onClick={e => this.toggleClass("active6", e)}
            />
            {this.state.presentInfo6 ? (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo6", e)}
                >
                  >
                </label>
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active6", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>Pris: 1000kr</p>
                  <div className="more-info-container" />
                </div>
              </div>
            ) : (
              <div className="test-container">
                <label
                  className="more-info-label"
                  onClick={e => this.toggleInfo("presentInfo6", e)}
                >
                  >
                </label>
                <img
                  className="shop-img"
                  src="/images/zebra.png"
                  alt="event"
                  onClick={e => this.toggleClass("active6", e)}
                />
                <div
                  className="shop-info"
                  onClick={e => this.toggleClass("active6", e)}
                >
                  <p>Kay Bojesen Flodhäst Träleksak</p>
                  <p>
                    Pris: 1000kr <div className="more-info-container" />
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
