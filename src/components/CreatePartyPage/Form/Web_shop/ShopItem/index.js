import React, { Component } from "react"

class Shop_item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
      infoToggled: false
    }
    this.toggleSelected = this.toggleSelected.bind(this)
    this.toggleInfo = this.toggleInfo.bind(this)
  }

  toggleSelected() {
    this.setState({ selected: !this.state.selected })
  }

  toggleInfo() {
    this.setState({ infoToggled: !this.state.infoToggled })
  }

  render() {
    return (
      <div
        className={this.state.selected ? "shop-item-border" : "shop-item"}
        id="1"
      >
        <div className={this.state.selected ? "shop-item-overlay" : ""} />
        <div
          className={this.state.selected ? "shop-item-checkmark" : ""}
          onClick={this.toggleSelected}
        />
        {this.state.infoToggled ? (
          <div className="test-container">
            <label className="more-info-label" onClick={this.toggleInfo}>
              >
            </label>
            <div className="shop-info" onClick={this.toggleSelected}>
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>Pris: 1000kr</p>
              <div className="more-info-container" />
            </div>
          </div>
        ) : (
          <div className="test-container">
            <label className="more-info-label" onClick={this.toggleInfo}>
              >
            </label>
            <img
              className="shop-img"
              src={this.props.image}
              alt="event"
              onClick={this.toggleSelected}
            />
            <div className="shop-info" onClick={this.toggleSelected}>
              <p>Kay Bojesen Flodhäst Träleksak</p>
              <p>
                Pris: 1000kr <div className="more-info-container" />
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Shop_item
