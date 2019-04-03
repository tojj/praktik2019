import React from 'react'
import EyeCatcher from './EyeCatcher/index'
import About from './about_us/index'
import ProductInfo from './ProductInfo/index'
import Convincer from './Convincer/index'

const StartPage = () => (
  <div className="startpage-wrapper">
    <EyeCatcher />
    <ProductInfo />
    <Convincer />
    <About />
  </div>
)

export default StartPage
