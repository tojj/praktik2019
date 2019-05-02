import React from 'react'
import {
  Gift,
  Heart,
  Clipboard,
  HelpCircle
} from 'react-feather'
import Category from './Category'

let CategoriesArr = [
  {
    "icon": <Gift />,
    "name": 'presenter',
    "active": false,
    "styling": {backgroundColor: '#4762b7', color: 'white'}
  },
  {
    "icon": <Heart />,
    "name": 'välgörenhet',
    "active": false,
    "styling": {backgroundColor: '#F66E9F', color: 'white'}
  },
  {
    "icon": <Clipboard />,
    "name": 'avtal',
    "active": false,
    "styling": {backgroundColor: '#FFC263', color: 'white'}
  },
  {
    "icon": <HelpCircle />,
    "name": 'kontakt',
    "active": false,
    "styling": {backgroundColor: '#008A64', color: 'white'}
  }
]
class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: ''
    }
  }
  componentDidMount(){
    if (this.props.name){
      this.clickHandler(this.props.name)
    } else {
      return
    }
  }
  clickHandler = (name) => {
    this.props.clickHandler(name)

    /**
     * Find the object with the "name" and set it to active = true
     */
    let index = this.findObjectByKey(CategoriesArr, "name", name)
    for (let category of CategoriesArr){
      category.active = false
    }
    if(index || index === 0){
      CategoriesArr[index].active = true
    }
  }
  findObjectByKey = (array, key, value) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return i;
      }
    }
    return null;
  }


  render() {
    return (
      <div className="category-holder">
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