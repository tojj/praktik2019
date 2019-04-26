import React from 'react'
import staticData from '../../../staticData'


const About = (props) => (
  <div className="box-container about-container" id="about-container">
    <div className="box">
      <h2 className="about-header">Om Oss</h2>
      {staticData.aboutData.map(renderInformationText)}
    </div>
    <div className="color-overlay" />

  </div>

)

/**
 * 
 * Skapade en subrenderkomponent nedanför som jag använder
 * sedan till att mappa ut data från StaticData istället för att
 * överanvända massa <p> så datan blir bloated.
 */

const renderInformationText = ({ text, id }) => {

  return (
    <p className="information-text" key={id}>{text}</p>
  )
}

export default About
