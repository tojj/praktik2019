import React, { Component } from "react"
import staticData from "../../../../staticData"

class Web_shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: "",
      showInfo: ""
    }
  }

  determineItemStyle(id) {
    const isItemSelected = this.state.selectedItem === id
    return isItemSelected
      ? "shop-item-overlay shop-item-checkmark"
      : "placeholder-div"
  }

  determineItemStyle2(id) {
    const isItemSelected = this.state.selectedItem === id
    return isItemSelected ? "shop-item-border" : "shop-item"
  }

  checkIfAlreadySelected(id) {
    if (this.state.selectedItem === id) {
      this.setState({ selectedItem: "" })
    } else {
      this.setState({ selectedItem: id })
    }
  }

  toggleInfo(id) {
    if (this.state.showInfo !== id) {
      this.setState({ showInfo: id })
    } else {
      this.setState({ showInfo: "" })
    }
  }

  renderShopProducts = ({ id, img, price, text }) => {
    return (
      <div className={this.determineItemStyle2(id)} key={id}>
        <div
          className={this.determineItemStyle(id)}
          onClick={() => this.checkIfAlreadySelected(id)}
        />
        <label className="more-info-label" onClick={() => this.toggleInfo(id)}>
          >
        </label>

        {this.state.showInfo === id ? (
          <div className="test-container">
            <p>{text}</p>
            <p>{text}</p>
            <p>{text}</p>
          </div>
        ) : (
          <div className="test-container">
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
        )}
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
