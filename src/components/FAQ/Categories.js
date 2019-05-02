import React from 'react'
import {
  Gift,
  User,
  Clipboard,
  HelpCircle
} from 'react-feather'
import Category from './Category'

let CategoriesArr = [
  {
    "icon": <Gift />,
    "name": 'Presenter'
  },
  {
    "icon": <User />,
    "name": 'Konto'
  },
  {
    "icon": <Clipboard />,
    "name": 'Avtal'
  },
  {
    "icon": <HelpCircle />,
    "name": 'Kontakt'
  }
]
class Categories extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      active: ''
    }
  }
  clickHandler = (name) => {
    this.props.clickHandler(name)
    this.setState({active: name})
    console.log(this.state.active)
    
    
    
  }
  render() {
    return (
      <div className="mt-5 category-holder">
        {CategoriesArr.map((category, i) => {
          return (
            <Category data={CategoriesArr[i]} clickHandler={this.clickHandler} key={"category_" + i} />
          )
        })}
      </div>
    )
  }
}

export default Categories