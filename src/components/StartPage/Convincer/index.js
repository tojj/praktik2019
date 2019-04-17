import React from 'react'
import staticData from '../../../staticData'
import Fade from 'react-reveal/Fade'


const Convincer = (props) => (
  <div className="box-container convincer-container">
    {(staticData.convincerData.map(renderConvincerText))}
  </div>
)

const renderConvincerText = ({ header, text, id, img }) => {

  return (
    <div className="box convincer-box" key={id}>
      <Fade bottom delay={id * 200}>
        <div className="convincer-image-container">
          <img className="box-img convincer-image" src={img} alt="Birthday present" />
        </div>
        <div className="convincer-info-container">
          <h4>{header}</h4>
          <p>{text}</p>
        </div>
      </Fade>
    </div>
  )
}

export default Convincer