import React, { Component } from "react"
import staticData from "../../../../staticData"

class Web_shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: ""
    }
  }

  determineItemStyle(id) {
    const isItemSelected = this.state.selectedItem === id
    return isItemSelected ? "shop-item-overlay shop-item-checkmark" : ""
  }

  determineItemStyle2(id) {
    const isItemSelected = this.state.selectedItem === id
    return isItemSelected ? "shop-item-border" : "shop-item"
  }

  renderShopProducts = ({ id, img, price, text }) => {
    return (
      <div
        className={this.determineItemStyle2(id)}
        onClick={() => this.setState({ selectedItem: id })}
        key={id}
      >
        <div className={this.determineItemStyle(id)} />
        <div className="test-container">
          <label className="more-info-label">></label>
          <img
            className="shop-img"
            src={img}
            alt="event"
            onClick={this.toggleSelected}
          />
          <div className="shop-info">
            <p>{text}</p>
            <p>Pris: {price}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="webshop-container">
        <h2 className="form-headline charity-headline text-center">
          Välj present
        </h2>
        <div className="shop-item-container">
          {staticData.shopData.map(this.renderShopProducts)}
        </div>
      </div>
    )
  }
}

export default Web_shop
