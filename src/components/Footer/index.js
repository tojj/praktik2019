import React from "react"
import { NavLink } from "react-router-dom"

import { Facebook, Twitter, Linkedin, Mail, MapPin } from "react-feather"

const Footer = () => (
  <div className="footer-container" id="contact-us">
    <div className="footer-logo">
      <NavLink
        className="footer-headliner"
        exact
        to="/"
        activeStyle={{ opacity: 1 }}
      >
        Tojj
      </NavLink>
    </div>
    <div className="footer-left">
      <div className="footer-inner">
        <label className="footer-links">Snabblänkar:</label>
        <div className="link-container">
          <NavLink
            to={"/skapa-kalas"}
            activeStyle={{ textDecoration: "underline" }}
            className="footer-link"
          >
            Skapa kalas
          </NavLink>
          <NavLink
            to={"/vanliga-fragor"}
            activeStyle={{ textDecoration: "underline" }}
            className="footer-link"
          >
            Hjälp
          </NavLink>
          <NavLink
            to={"/avtal"}
            activeStyle={{ textDecoration: "underline" }}
            className="footer-link"
          >
            {" "}
            Avtal
          </NavLink>
        </div>
      </div>
    </div>
    <div className="footer-center">
      <div className="footer-inner">
        <label className="footer-help">Kontakta oss:</label>
        <div>
          <p>
            <a href="mailto:info@tojj.se" className="footer-link">
              <Mail size="18" /> info@tojj.se
            </a>
          </p>
          <address>
            <a
              href="https://www.google.com/maps/place/Humlegatan+4,+211+27+Malm%C3%B6/@55.6071389,13.0082618,19.09z/data=!4m5!3m4!1s0x4653a3e350cd28af:0xb22bc0e96f471b67!8m2!3d55.6071248!4d13.0087734"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <MapPin size="18" /> Humlegatan 4, 211 27 Malmö
            </a>
          </address>
        </div>
      </div>
    </div>
    <div className="footer-right">
      <div className="footer-inner">
        <label className="footer-connect">Följ oss:</label>
        <div className="media-container">
          <Facebook className="media-icon" size={36} />
          <a
            href="http://www.twitter.com/tojjkalas"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter">
            <Twitter className="media-icon" size={36} />
          </a>
          <a
            href="http://www.linkedin.com/in/tojj-kalas-6890a718b"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin className="media-icon" size={36} />
          </a>
        </div>
        <p className="footer-copy">odd hill 2019</p>
      </div>
    </div>
  </div>
)

export default Footer
