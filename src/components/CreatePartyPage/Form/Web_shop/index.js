import React, { Component } from "react"
import axios from 'axios'
import { connect } from "react-redux"
import { doUpdateProductInfo } from "../../../../store/Birthday/BirthdayActions"
import SwishQR from "../Form_body/SwishQR";

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

  componentDidMount() {
    this.isPresentPicked()
  }

  isPresentPicked() {
    if (this.props.present.id) {
      this.toggleSelected(this.props.present.id)
      this.toggleSelectBorder(this.props.present.id)
      this.toggleSelectOverlay(this.props.present.id)
    }
  }

  async loadData() {
    this.allProductsData = await axios({
      method: 'get',
      url: '/api/products'
    })
    this.allProductsData = this.allProductsData.data
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
    let selectedProduct = await axios({
      method: 'get',
      url: `/api/products/id/${this.productId}`
    })
    selectedProduct = selectedProduct.data
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
            <div className="content-container">
              <p>{product.desc}</p>
            </div>
          ) : (
              <div className="content-container">
                <img
                  className="shop-img"
                  src={product.image ? product.image : '/images/present.png'}
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
          <SwishQR />
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
