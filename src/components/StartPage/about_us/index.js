import React from 'react'
import staticData from '../../../staticData'


const About = (props) => (
  <div className="about-container" id="about-container">
    <h1 className="about-header">Om Oss</h1>
    {staticData.map(renderInformationText)}
    <div className="color-overlay" />
  </div>

)

const renderInformationText = ({ text, id }) => {

  return (
    <p className="information-text" key={id}>{text}</p>
  )
}

export default About
