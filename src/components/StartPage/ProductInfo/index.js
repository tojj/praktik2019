import React from "react";
import "./style.scss";

const ProductInfo = props => (
  <div className="box-container">
    <div className="box-1">
      <h2>Bästa presenten</h2>
      <p>
        Med Vojj kan till och med Ken får det kalas han förtjänar. Klicka på
        knappen nedan för att skapa ditt kalas nu!
      </p>
    </div>
    <div className="box-2">
      <img className="image" src="./prodinfobg.png" alt="Eye-catcher image" />
    </div>
  </div>
);
export default ProductInfo;
