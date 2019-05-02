import React, { Component } from "react"
import staticData from "../../../../staticData"
import REST from "../../../../REST"

class Product extends REST {}
class Web_shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: "",
      showInfo: "",
      allProductsData: ""
    }
    this.allProductsData = ""
    this.loadData()
  }

  async loadData() {
    this.allProductsData = await Product.find()
    console.log(this.allProductsData)
    this.setState({ allProductsData: this.allProductsData })
  }

  toggleSelectOverlay(id) {
    const isItemSelected = this.state.selectedItem === id
    return isItemSelected
      ? "shop-item-overlay shop-item-checkmark"
      : "placeholder-div"
  }

  toggleSelectBorder(id) {
    const isItemSelected = this.state.selectedItem === id
    return isItemSelected ? "shop-item-border" : "shop-item"
  }

  toggleSelected(id) {
    if (this.state.selectedItem === id) {
      this.setState({ selectedItem: "" })
      //console.log(this.state.selectedItem)
    } else {
      this.setState({ selectedItem: id })
      //console.log(this.state.selectedItem)
    }
  }

  toggleInfo(id) {
    if (this.state.showInfo !== id) {
      this.setState({ showInfo: id })
    } else {
      this.setState({ showInfo: "" })
    }
  }

  renderShopProducts = ({ id, img, price, text, desc }) => {
    return (
      <div className={this.toggleSelectBorder(id)} key={id}>
        <div
          className={this.toggleSelectOverlay(id)}
          onClick={() => this.toggleSelected(id)}
        />
        <label className="more-info-label" onClick={() => this.toggleInfo(id)}>
          >
        </label>

        {this.state.showInfo === id ? (
          <div className="test-container">
            <p>{desc}</p>
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

  renderProducts() {
    return this.allProductsData.map((product, id) => {
      return (
        <div className={this.toggleSelectBorder(product._id)} key={id}>
          <div
            className={this.toggleSelectOverlay(product._id)}
            onClick={() => this.toggleSelected(product._id)}
          />
          <label
            className="more-info-label"
            onClick={() => this.toggleInfo(product._id)}
          >
            >
          </label>

          {this.state.showInfo === product._id ? (
            <div className="test-container">
              <p>{product.desc}</p>
            </div>
          ) : (
            <div className="test-container">
              <img
                className="shop-img"
                src={product.image}
                alt="event"
                onClick={this.toggleSelected}
              />
              <div className="shop-info">
                <p>{product.name}</p>
                <p>Pris: {product.price}</p>
              </div>
            </div>
          )}
        </div>
      )
    })
  }

  render() {
    if (this.state.allProductsData === "") {
      return <div />
    } else {
      return (
        <div className="webshop-container">
          <h2 className="form-headline charity-headline text-center">
            Välj present
          </h2>
          <div className="shop-item-container">{this.renderProducts()}</div>
          {console.log(this.state.selectedItem)}
        </div>
      )
    }
  }
}

export default Web_shop
