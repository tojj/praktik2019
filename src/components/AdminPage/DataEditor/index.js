import React from 'react'

class DataEditor extends React.Component {
  constructor(props) {
    super(props)
    this.entriesData = Object.entries(this.props.object)
  }
  deleteObject = () => {
    this.props.delete(this.props.object)
  }
  saveObject = () => {
    const newObject = this.createObject()
    this.props.save(newObject)
  }
  createObject = () => {
    let object = this.props.object
    this.entriesData.map(entry => {
      if (entry[0] === 'location' || entry[0] === 'swish' || entry[0] === 'attending') {
        //Don't do anything
      } else {
          object[entry[0]] = document.getElementById(entry[0]).value
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
            ? <div>
              <p className="object-key">{entry[0]}</p>
              <input className="w-100" type="text" defaultValue={entry[1]} id={entry[0]} />
            </div>
            : <div>
              <p className="object-key">{entry[0]}</p>
              <input className="w-100" type="text" readOnly defaultValue={entry[1]} id={entry[0]} />
            </div>}
        </div>
      )
    })
    return (
      <div className="edit-wrapper">
        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>{this.props.object._id}</p>
        {entries}
        {this.props.object.location ?
          <div>
            <p>Location</p>
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
            <p>Swish</p>
            <p>Amount</p>
            <input className="w-100" type="text" defaultValue={this.props.object.swish.amount} id="amount" />
            <p>Color</p>
            <input className="w-100" type="text" defaultValue={this.props.object.swish.color} id="color" />
            <p>Number</p>
            <input className="w-100" type="text" defaultValue={this.props.object.swish.number} id="number" />
          </div>
          : null
        }
        <button onClick={this.deleteObject} className="btn btn-danger mt-5 float-right d-block">Ta bort</button>
        <button onClick={this.saveObject} className="btn btn-success w-10 mt-5 d-block">Spara</button>
      </div>
    )
  }
}
export default DataEditor