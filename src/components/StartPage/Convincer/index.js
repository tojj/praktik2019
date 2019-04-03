import React from 'react'
import staticData from '../../../staticData'

const Convincer = (props) => (
  <div className="convincer-container">
    {(staticData.convincerData.map(renderConvincerText))}
    
  </div>
)

const renderConvincerText = ({ header, text, id, img }) => {

  return (
    <div className="convincer-box" key={id}>
      <div className="convincer-image-container">
        <img className="convincer-image" src={img} alt="Birthday present" />
      </div>
      <div className="convincer-info-container">
        <h4>{header}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Convincer