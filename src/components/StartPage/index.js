import React from 'react'
import EyeCatcher from './EyeCatcher/index'
import ProductInfo from './ProductInfo/index'
import Convincer from './Convincer/index'
import About from './About_us/index'

const StartPage = () => (
  <div className="startpage-wrapper">
    <EyeCatcher />
    <ProductInfo />
    <Convincer />
    <About />
  </div>
)

export default StartPage
