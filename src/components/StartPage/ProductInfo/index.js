import React from "react"

const ProductInfo = props => (
  <div className="prodinfo-container">
    <div className="prodinfo-box-1">
      <img className="fg-image" src="/images/prodinfobg.png" alt="fg" />
    </div>
    <div className="prodinfo-box-2">
      <h2 className="prodinfo-header">Kvalitet över kvantitet</h2>
      <p className="info-text">
        Barnkalas är jättekul, men varför ge bort flera presenter som ingen vill
        ha istället för att hålla det till några få riktigt bra presenter?
      </p>
      <p className="info-text">
        Med Vojj är det nu enkelt att gå ihop och ge barnen något som de
        faktiskt önskar sig!
      </p>
      <p className="info-text">
        Barnkalas är jättekul, men varför ge bort flera presenter som ingen vill
        ha istället för att hålla det till några få riktigt bra presenter?
      </p>
      <p className="info-text">
        Med Vojj är det nu enkelt att gå ihop och ge barnen något som de
        faktiskt önskar sig!
      </p>
    </div>
    <div className="prodinfo-overlay" />
  </div>
)
export default ProductInfo
