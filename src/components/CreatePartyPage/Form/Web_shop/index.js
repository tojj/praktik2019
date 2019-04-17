import React, { Component } from "react"
import ShopItem from "./ShopItem/index"
import staticData from "../../../../staticData"

class Web_shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderOliverItems = ({ img, id }) => {
    return <ShopItem key={id} image={img} />
  }

  render() {
    return (
      <div className="webshop-container">
        <h2 className="form-headline charity-headline text-center">
          Välj present
        </h2>
        <div className="shop-item-container">
          {staticData.shopData.map(this.renderOliverItems)}
        </div>
      </div>
    )
  }
}

export default Web_shop
