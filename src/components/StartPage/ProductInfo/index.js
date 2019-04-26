import React from "react"
import staticData from "../../../staticData"

const ProductInfo = props => (
  <div className="box-container prodinfo-container" id="prodinfo-container">
    <div className="box prodinfo-box-1">
      <img className="box-img" src="/images/bd-boy.jpg" alt="child superhero" />
    </div>
    <div className="box prodinfo-box-2">
      <h2 className="prodinfo-header">Kvalitet över kvantitet</h2>
      {staticData.productData.map(renderProductText)}
    </div>
    <div className="prodinfo-overlay" />
  </div>
)

const renderProductText = ({ text, id }) => {
  return (
    <p className="info-text" key={id}>
      {text}
    </p>
  )
}

export default ProductInfo
