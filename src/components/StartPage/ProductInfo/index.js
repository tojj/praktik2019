import React from "react"
import staticData from "../../../staticData"

const ProductInfo = () => (
  <div className="box-container prodinfo-container" id="prodinfo-container">
    <div className="box box-1 box-img-left">
    <iframe title="Instructions video" width="100%" height="400px" src="https://www.youtube.com/embed/Mo6iovzWIA8" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <div className="box box-2">
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
