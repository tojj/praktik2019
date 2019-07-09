import React from "react"
import { Link } from "react-router-dom"

const EyeCatcher = () => (
  <div className="eye-catcher box-container" id="eye-catcher">
    <div className="box box-1">
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
    <div className="box">
      <div style={{ maxWidth: "760px" }}>
        <iframe
          title="Instructions video"
          width="100%"
          height="400px"
          src="https://www.youtube.com/embed/Mo6iovzWIA8"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
)

export default EyeCatcher
