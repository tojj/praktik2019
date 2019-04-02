import React from "react"

const EyeCatcher = (props) => (
  <div className="box-container eye-catcher" id="eye-catcher">
    <div className="box box-1">
      <h2 className="main-heading" id="eye-catcher-heading">BÄSTA PRESENTEN</h2>
      <p>Med Vojj kan till och med alla få det kalas de förtjänar. Klicka på knappen nedan för att skapa ditt kalas nu!</p>
      <button className="link-eye-catcher">Skapa kalas</button>
    </div>
    <div className="box box-2">
      <img className="eye-catcher-img box-img" id="small-eye-catcher" src="/images/eye-catcher-img.png" alt="Birthday card" />
    </div>
  </div>
)

export default EyeCatcher
