import React from 'react'

class DataEditor extends React.Component {
  constructor(props) {
    super(props)
    this.entriesData = Object.entries(this.props.object)
  }
  deleteObject = () => {
    if(window.confirm(`Är du säker på att du vill ta bort: ${this.props.object._id}`)){
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
      if (entry[0] === '_id' || 
      entry[0] === 'location' || 
      entry[0] === 'swish' || 
      entry[0] === 'attending' ||
      entry[0] === 'invited') {
        return null
      } else {
        return object[entry[0]] = document.getElementById(entry[0]).value
      }
    })
    if (document.getElementById('street') ||
      document.getElementById('zipcode') ||
      document.getElementById('city')) {
      object.location = {
        street: document.getElementById('street').value,
        zipcode: document.getElementById('zipcode').value,
        city: document.getElementById('city').value
      }
    }
    if (
      document.getElementById('amount') ||
      document.getElementById('color') ||
      document.getElementById('number')) {
      object.swish = {
        amount: document.getElementById('amount').value,
        color: document.getElementById('color').value,
        number: document.getElementById('number').value,
      }
    }
    if (this.props.newObj) {
      delete object._id
    }
    return object
  }

  render() {
    const entries = this.entriesData.map((entry, i) => {
      return (
        <div key={i}>
          {entry[0] !== '__v'
            && entry[0] !== '_id'
            && entry[0] !== 'attending'
            && entry[0] !== 'location'
            && entry[0] !== 'swish'
            && entry[0] !== 'invited'
            ? <div>
              <p className="object-key">{entry[0]}</p>
              {entry[0] === 'category' && this.props.newObj
                ? <select
                  id="category"
                  className="w-100">
                  <option>presenter</option>
                  <option>välgörenhet</option>
                  <option>avtal</option>
                  <option>allmänt</option>
                </select>
                : <input
                  className="w-100"
                  type={entry[0] === 'counter' ? "number" : "text"}
                  defaultValue={!this.props.newObj ? entry[1] : ''}
                  id={entry[0]} />
              }
            </div>
            : <div className="hide-me">
              <p className="object-key">{entry[0]}</p>
              <input className="w-100" type="text" readOnly defaultValue={!this.props.newObj ? entry[1] : ''} id={entry[0]} />
            </div>}
        </div>
      )
    })
    return (
      <div>
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{this.props.newObj ? 'Nytt objekt' : this.props.object._id}</p>
        {entries}
        {this.props.object.location ?
          <div>
            <p><strong>Location</strong></p>
            <p>Street</p>
            <input className="w-100" type="text" defaultValue={this.props.object.location.street} id="street" />
            <p>Zipcode</p>
            <input className="w-100" type="text" defaultValue={this.props.object.location.zipcode} id="zipcode" />
            <p>City</p>
            <input className="w-100" type="text" defaultValue={this.props.object.location.city} id="city" />
          </div>
          : null
        }
        {this.props.object.swish ?
          <div>
            <p className="mt-3"><strong>Swish</strong></p>
            <p>Amount</p>
            <input className="w-100" type="text" defaultValue={this.props.object.swish.amount} id="amount" />
            <p>Color</p>
            <input className="w-100" type="text" defaultValue={this.props.object.swish.color} id="color" />
            <p>Number</p>
            <input className="w-100" type="text" defaultValue={this.props.object.swish.number} id="number" />
          </div>
          : null
        }
        <button onClick={this.saveObject} className="btn btn-success mt-3 float-right">Spara</button>
        { !this.props.newObj ? <button onClick={this.deleteObject} className="btn btn-danger mt-3">Ta bort</button> : null}
      </div>
    )
  }
}
export default DataEditor