import React from "react"
import './styles.scss'


const EyeCatcher = (props) => <div className="box-container" id="eye-catcher">
  <div className="box-1">
    <h2 className="main-heading" id="eye-catcher-heading">BÄSTA PRESENTEN</h2>
    <p>Med Vojj kan till och med Kent får det kalas han förtjänar. Klicka på knappen nedan för att skapa ditt kalas nu!</p>
    <button className="link-eye-catcher">Skapa kalas</button>
  </div>
  <div className="box-2">
    <img className="eye-catcher" id="small-eye-catcher" src="/images/eye-catcher-img.png" alt="Birthday card"></img></div>
</div>

export default EyeCatcher
