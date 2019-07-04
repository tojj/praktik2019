import React from "react"
import { NavLink } from "react-router-dom"

import { Facebook, Twitter, Linkedin } from "react-feather"

const Footer = () => (
  <div className="footer-container" id="contact-us">
    <div className="footer-logo">
      <h1 className="footer-headliner">Tojj</h1>
    </div>
    <div className="footer-left">
      <div className="footer-inner">
        <label className="footer-links">Länkar:</label>
        <div className="link-container">
          <NavLink
            to={"/skapa-kalas"}
            activeStyle={{ fontWeight: "bold" }}
            className="footer-link"
          >
            {" "}
            Avtal
          </NavLink>
          <NavLink
            to={"/avtal"}
            activeStyle={{ fontWeight: "bold" }}
            className="footer-link"
          >
            {" "}
            Avtal
          </NavLink>
          <NavLink
            to={"/vanliga-fragor"}
            activeStyle={{ fontWeight: "bold" }}
            className="footer-link"
          >
            Hjälp
          </NavLink>
          <div className="link-container-under">
            <NavLink
              to={"/skapa-kalas"}
              activeStyle={{ fontWeight: "bold" }}
              className="footer-link"
            >
              Skapa kalas
            </NavLink>
            <NavLink
              to={"/avtal"}
              activeStyle={{ fontWeight: "bold" }}
              className="footer-link"
            >
              {" "}
              Avtal
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-center">
      <div className="footer-inner">
        <label className="footer-help">Behöver du hjälp?</label>
        <div className="links">
          <div>
            <p>
              <a href="mailto:info@tojj.se" className="mail-link">
                info@tojj.se
              </a>
            </p>
            <address>
              <a
                href="https://www.google.com/maps/place/Humlegatan+4,+211+27+Malm%C3%B6/@55.6071389,13.0082618,19.09z/data=!4m5!3m4!1s0x4653a3e350cd28af:0xb22bc0e96f471b67!8m2!3d55.6071248!4d13.0087734"
                target="_blank"
                rel="noopener noreferrer"
                className="adress-link"
              >
                Humlegatan 4, 211 27 Malmö
              </a>
            </address>
          </div>
          <div className="link-container">
            <NavLink
              to={"/avtal"}
              activeStyle={{ fontWeight: "bold" }}
              className="avtal-link"
            >
              {" "}
              Avtal
            </NavLink>
            <NavLink
              to={"/vanliga-fragor"}
              activeStyle={{ fontWeight: "bold" }}
              className="help-link"
            >
              Hjälp
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-right">
      <div className="footer-inner">
        <label className="footer-connect">Kontakta oss:</label>
        <div className="media-container">
          <Facebook className="media-icon" size={36} />
          <Twitter className="media-icon" size={36} />
          <Linkedin className="media-icon" size={36} />
        </div>
      </div>
    </div>
  </div>
)

export default Footer

{
  /* <h1 className="footer-headliner">Tojj</h1>
    <div className="links">
      <div>
        <p><a href="mailto:info@tojj.se" className="mail-link" >info@tojj.se</a></p>
        <address>
          <a
            href="https://www.google.com/maps/place/Humlegatan+4,+211+27+Malm%C3%B6/@55.6071389,13.0082618,19.09z/data=!4m5!3m4!1s0x4653a3e350cd28af:0xb22bc0e96f471b67!8m2!3d55.6071248!4d13.0087734"
            target="_blank"
            rel="noopener noreferrer"
            className="adress-link">
            Humlegatan 4, 211 27 Malmö
    </a>
        </address>
      </div>
      <div className="link-container">
        <NavLink to={"/avtal"} activeStyle={{ fontWeight: "bold" }} className="avtal-link" > Avtal</NavLink>
        <NavLink to={"/vanliga-fragor"} activeStyle={{ fontWeight: "bold" }} className="help-link">Hjälp</NavLink>
      </div>
    </div>
    <div className="media-container">
      <Facebook className="media-icon" size={36} />
      <Twitter className="media-icon" size={36} />
      <Linkedin className="media-icon" size={36} />

    </div> */
}
