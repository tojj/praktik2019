import React from 'react'
import staticData from '../../../staticData'


const About = (props) => (
  <div className="about-container" id="about-container">
    <h1 className="about-header">Om Oss</h1>
    {staticData.aboutData.map(renderInformationText)}
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
