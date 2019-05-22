import React from 'react'

class DataItem extends React.Component {
  
  clickHandler = () => {
    this.props.clickHandler(this.props.object)       
  }

  render() {
    const object = this.props.object
    const i = this.props.index
    return (
      <div onClick={this.clickHandler} className="preview-item" key={"preview_" + i} style={i % 2 ? { background: '#eee' } : { background: '#ddd' }}>
        {object.name ? <p>{object.name}</p> : null}
        {object.question ? <p>{object.question}</p> : null}
        {object.title ? <p>{object.link}</p> : null}
        <p style={{ display: 'inline-block', float: 'right' }}>{i + 1}</p>
        <p>{object._id}</p>
      </div>
    )
  }
}

export default DataItem