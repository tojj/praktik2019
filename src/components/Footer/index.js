import React from 'react'
import staticData from '../../staticData'

const Footer = (props) => (
  <div className="footer-container" id="contact-us">
    <h1 className="footer-headliner">Vojj</h1>
    {staticData.footerData.map(renderFooterText)}
    <div className="media-container">
      {staticData.footerImages.map(renderFooterImages)}
    </div>
  </div>
)

/**
 * 
 * Skapade en subrenderkomponent nedanför som jag använder
 * sedan till att mappa ut data från StaticData istället för att
 * överanvända massa <p> så datan blir bloated.
 */

const renderFooterText = ({ text, id }) => {
  return (
    <p className="footer-information" key={id}>{text}</p>
  )
}

const renderFooterImages = ({ img, id }) => {
  return (
    <img src={img} className="footer-images" alt="" key={id}></img>
  )
}

export default Footer