import React from 'react'
import staticData from '../../staticData'

import { 
  Facebook, 
  Twitter, 
  Linkedin 
} from 'react-feather'

const Footer = (props) => (
  <div className="footer-container" id="contact-us">
    <h1 className="footer-headliner">Tojj</h1>
    {staticData.footerData.map(renderFooterText)}
    <div className="media-container">
      <Facebook className="media-icon" size={36} />
      <Twitter className="media-icon" size={36} />
      <Linkedin className="media-icon" size={36} />

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

export default Footer