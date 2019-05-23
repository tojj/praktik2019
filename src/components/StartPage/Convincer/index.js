import React from "react"
import staticData from "../../../staticData"

const Convincer = props => (
  <div className="box-container convincer-container">
    {staticData.convincerData.map(renderConvincerText)}
  </div>
)

const renderConvincerText = ({ header, text, id, img }) => {
  return (
    <div className="box convincer-box" key={id}>
      <div>
        <div className="convincer-image-container">
          <img
            className="box-img convincer-image"
            src={img}
            alt="Birthday present"
          />
        </div>
        <div className="convincer-info-container" style={{minHeight: '260px'}}>
          <h4>{header}</h4>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default Convincer
