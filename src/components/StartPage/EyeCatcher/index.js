import React from "react"
import { Link } from "react-router-dom"

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
    </div>
    <div className="box-1">
      <h2 className="main-heading" id="eye-catcher-heading">
        BÄSTA PRESENTEN
      </h2>
      <p className="eye-text">
        Med Tojj kan alla få det kalas de förtjänar. Klicka på knappen nedan för
        att skapa ditt kalas nu!
      </p>
      <Link to="/skapa-kalas" className="link-eye-catcher">
        Skapa kalas
      </Link>
    </div>
  </div>
)

export default EyeCatcher
