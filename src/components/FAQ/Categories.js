import React from 'react'
import Category from './Category'

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
    let index = this.findObjectByKey(this.props.categories, "name", name)
    for (let category of this.props.categories){
      category.active = false
    }
    if(index || index === 0){
      this.props.categories[index].active = true
    }
  }
  findObjectByKey = (array, key, value) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return i
      }
    }
    return null
  }


  render() {
    return (
      <div className="category-holder">
        {this.props.categories.map((category, i) => {
          return (
            <Category data={this.props.categories[i]} clickHandler={this.clickHandler} key={"category_" + i} />
          )
        })}
      </div>
    )
  }
}

export default Categories