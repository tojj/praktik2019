import React from 'react'
import EyeCatcher from './EyeCatcher/index'
import ProductInfo from './ProductInfo/index'
import Convincer from './Convincer/index'
import About from './about_us/index'

class StartPage extends React.Component {
  componentDidMount() {
    document.title = "Tojj - Digital Kalasinbjudan"
  }
  render() {
    return (
      <div className="startpage-wrapper">
        <EyeCatcher />
        <ProductInfo />
        <Convincer />
        <About />
      </div>

    )
  }
}

  export default StartPage
