import React from 'react'


class Category extends React.Component {
  clickHandler = () => {
    this.props.clickHandler(this.props.data.name)
  }
  render() {
    return (
      <div 
        className="category-item" 
        id={this.props.name} 
        onClick={this.clickHandler}>
        <p>{this.props.data.icon}</p>
        <p className="category-name">{this.props.data.name}</p>
      </div>
    )
  }
}

export default Category