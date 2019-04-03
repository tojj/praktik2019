import React from "react"
import staticData from '../../../staticData'

const ProductInfo = (props) => (
  <div className="prodinfo-container">
    <div className="prodinfo-box-1">
      <img className="fg-image" src="/images/prodinfobg.png" alt="fg" />
    </div>
    <div className="prodinfo-box-2">
      <h2 className="prodinfo-header">Kvalitet över kvantitet</h2>
      {(staticData.productData.map(renderProductText))}
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