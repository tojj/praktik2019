import React from 'react'

class DataEditor extends React.Component {
  constructor(props) {
    super(props)
    this.entriesData = Object.entries(this.props.object)
  }
  deleteObject = () => {
    if (window.confirm(`Är du säker på att du vill ta bort: ${this.props.object._id}`)) {
      this.props.delete(this.props.object._id, this.props.collection)
    }

  }
  saveObject = () => {
    const newObject = this.createObject()
    this.props.save(newObject)
  }
  createObject = () => {
    let object = this.props.object
    this.entriesData.map(entry => {
      return object[entry[0]] = document.getElementById(entry[0]).value
    })
    if (this.props.newObj) {
      delete object._id
    }
    return object
  }

  render() {
    const entries = this.entriesData.map((entry, i) => {
      return (
        <div key={i}>
          <div>
            <h6 style={{ fontFamily: 'Montserrat', fontWeight: '600' }} className="object-key mt-5">{entry[0]}</h6>
            {entry[0] === 'category' && this.props.newObj
              ? <select
                id="category"
                className="w-100">
                <option>presenter</option>
                <option>välgörenhet</option>
                <option>avtal</option>
                <option>allmänt</option>
              </select>
              : entry[1] instanceof Object
                ? Object.entries(entry[1]).map((entry, i) => {

                  if (entry[1] instanceof Object) {
                    let attending = Object.entries(entry[1]).map(entry => {
                      return (
                        <div className="pl-3" key={entry[0]+ ' ' + i}>
                          <p className="object-key">{entry[0]} </p>
                          <input
                            className="w-100"
                            type={entry[0] === 'counter' ? "number" : "text"}
                            defaultValue={!this.props.newObj ? entry[1] : ''}
                            id={entry[0]} />
                        </div>
                      )
                    })                    
                    return (
                      <div className="pl-3" key={entry[0]+ ' ' + i}>
                        <p>{entry[0]}</p>
                        {attending}
                      </div>   
                    )
                  } else {
                    return (
                      <div className="pl-3" key={entry[0]+ ' ' + i}>
                        <p className="object-key">{entry[0]}</p>
                        <input
                          className="w-100"
                          type={entry[0] === 'counter' ? "number" : "text"}
                          defaultValue={!this.props.newObj ? entry[1] : ''}
                          id={entry[0]} />
                      </div>
                    )
                  }

                })

                : <input
                  className="w-100"
                  type={entry[0] === 'counter' ? "number" : "text"}
                  defaultValue={!this.props.newObj ? entry[1] : ''}
                  id={entry[0]} />
            }
          </div>
        </div>
      )
    })
    return (
      <div>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{this.props.newObj ? 'Nytt objekt' : this.props.object._id}</p>
        {entries}
        <button onClick={this.saveObject} className="btn btn-success mt-3 float-right">Spara</button>
        {!this.props.newObj ? <button onClick={this.deleteObject} className="btn btn-danger mt-3">Ta bort</button> : null}
      </div >
    )
  }
}
export default DataEditor