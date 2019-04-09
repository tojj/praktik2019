import React from 'react'
import { Image, ArrowDownCircle } from 'react-feather'

const ImageHandler = (props) => (
  <div className="imagehandler-container">
    <h2 className="image-headline">Välj bakgrundsbild till kalaset</h2>
    <div className="image-pick-container">
      <p className="image-text">Ladda upp egen bild</p>
      <Image className="container-image" />
    </div>
    <button className="image-dropdown">Våra urval<ArrowDownCircle /></button>
  </div>
)

export default ImageHandler


