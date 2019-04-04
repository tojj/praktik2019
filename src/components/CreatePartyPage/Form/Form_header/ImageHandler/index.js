import React from 'react'
import { Image } from 'react-feather'

const ImageHandler = (props) => (
  <div className="handler-container">
    <div className="image-container">
      <p className="add-text">Lägg till bild</p>
      <Image className="image-icon" />
    </div>
      <button className="image-dropdown"><Image />Våra urval</button>
  </div>
)

export default ImageHandler