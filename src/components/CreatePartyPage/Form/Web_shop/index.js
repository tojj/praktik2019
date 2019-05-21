import React, { Component } from "react"
import PRODUCT from "../../../../REST/PRODUCT"
import { connect } from "react-redux"
import { doUpdateProductInfo } from "../../../../store/Birthday/BirthdayActions"

class Product extends PRODUCT {}
class Web_shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItem: "",
      showInfo: "",
      allProductsData: ""
    }
    this.allProductsData = ""
    this.productId = ""
    this.loadData()
  }

  async loadData() {
    this.allProductsData = await Product.find()
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
    } else {
      this.setState({ selectedItem: id })
      this.productId = id
      this.findProductInDb()
    }
  }

  toggleInfo(id) {
    if (this.state.showInfo !== id) {
      this.setState({ showInfo: id })
    } else {
      this.setState({ showInfo: "" })
    }
  }

  async findProductInDb() {
    let selectedProduct = await Product.find(`.findById('${this.productId}')`)
    let productToSave = {
      id: selectedProduct._id,
      name: selectedProduct.name,
      desc: selectedProduct.desc,
      image: selectedProduct.image,
      link: selectedProduct.link,
      price: selectedProduct.price
    }
    this.props.updateProduct(productToSave)
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
            <img src="/images/infoTab.png" alt="" />
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
        </div>
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  updateProduct: data => dispatch(doUpdateProductInfo(data))
})

const mapStateToProps = state => {
  return {
    present: state.birthday.present
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Web_shop)
