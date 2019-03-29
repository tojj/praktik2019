import React from "react"
import './styles.scss'


const EyeCatcher = (props) => <div className="box-container">
  <div className="box-1">
    <h2>Bästa presenten</h2>
    <p>Med Vojj kan till och med Ken får det kalas han förtjänar. Klicka på knappen nedan för att skapa ditt kalas nu!</p>
    <button className="link-eye-catcher">Skapa kalas</button>
  </div>
  <div className="box-2">
    <img className="eye-catcher" src="/images/eye-catcher-img.png" alt="Eye-catcher image"></img></div>
</div>

export default EyeCatcher
