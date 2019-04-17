import React, { Component } from "react"
import staticData from "../../../../staticData"

class Web_shop extends React.Component {
  constructor(props) {
    super(props)
    

  }

  renderShopProducts = ({id, img, price, text }) => {
    return (
      <div className="shop-item" key={id}>
      <div className="test-container">
      <label className="more-info-label" onClick={this.toggleInfo} >
        >
      </label>
      <img
        className="shop-img"
        src={img}
        alt="event"
        onClick={this.toggleSelected}
      />
      <div className="shop-info" onClick={this.toggleSelected} >
        <p>{text}</p>
        <p>
          Pris: {price}
        </p>
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
