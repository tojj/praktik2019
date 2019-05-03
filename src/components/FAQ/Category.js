import React from 'react'


class Category extends React.Component {
  clickHandler = () => {
    this.props.clickHandler(this.props.data.name)   
     
  }
  render() {
    return (
      <div 
        className="category-item"
        style={this.props.data.active ? this.props.data.styling : null}
        id={this.props.data.name} 
        onClick={this.clickHandler}>
        <p>{this.props.data.icon}</p>
        <p className="category-name">{this.props.data.name}</p>
      </div>
    )
  }
}

export default Category