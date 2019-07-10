import React from "react"
import { Link } from "react-scroll"

const videoURL = "/images/startpage/bg-vid.mp4"

const EyeCatcher = () => (
  <div className="eye-catcher" id="eye-catcher">
    <div className="video-container">
      <video
        className="bg-video"
        id="background-video"
        loop
        autoPlay
        muted={true}
        preload="auto"
        poster="/images/startpage/bg-img.jpg"
      >
        <source src={videoURL} type="video/mp4" />
      </video>
      <div className="bg-overlay" />
      <Link
        spy={true}
        smooth={true}
        duration={500}
        to="prodinfo-container"
      >
        <div className="arrow bounce" />
      </Link>
    </div>
    <div className="box-1">
      <h2 className="main-heading" id="eye-catcher-heading">
        BÄSTA PRESENTEN
      </h2>
      <p className="eye-text">
        Med Tojj kan alla få det kalas de förtjänar. Klicka på knappen nedan för
        att skapa ditt kalas nu!
      </p>
      <a href="/skapa-kalas" className="link-eye-catcher">
        Skapa kalas
      </a>
    </div>
  </div>
)

export default EyeCatcher
