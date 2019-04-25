import React, { Component } from "react"
import staticData from "../../../../staticData"
import REST from "../../../../REST"

class Product extends REST { }
class Web_shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: "",
      showInfo: "",
      shopContent: ""
    }
    this.allProductsData = []
    this.allProducts = []
    this.renderShopProducts = this.renderShopProducts.bind(this)
    this.renderShopProducts()
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
    console.log(this.state.selectedItem)
  }

  toggleInfo(id) {
    if (this.state.showInfo !== id) {
      this.setState({ showInfo: id })
    } else {
      this.setState({ showInfo: "" })
    }
  }

  async renderShopProducts() {
    this.allProductsData = await Product.find()
    this.allProducts = this.allProductsData.map((product, i) => {
      return (
      <div className={this.determineItemStyle2(i)} key={"product_"+i}>
        <div
          className={this.determineItemStyle(i)}
          onClick={() => this.checkIfAlreadySelected(i)}
        />
        <label className="more-info-label" onClick={() => this.toggleInfo(i)}>
          >
          </label>
        {console.log(this.state.showInfo, i)}
        {this.state.showInfo === i ? (
          <div className="test-container">
            <p>{product.desc}</p>
          </div>
        ) : (
            <div className="test-container">
              <img
                className="shop-img"
                src={product.image}
                alt="product-img"
                onClick={this.toggleSelected}
              />
              <div className="shop-info">
                <p>{product.text}</p>
                <p>Pris: {product.price}</p>
              </div>
            </div>
          )}
      </div>
      )
    })
    this.setState({shopContent: this.allProducts})
  }

  render() {
    return (
      <div className="webshop-container">
        <h2 className="form-headline charity-headline text-center">
          Välj present
        </h2>
        <div className="shop-item-container">
          {this.state.shopContent}
        </div>
      </div>
    )
  }
}

export default Web_shop
