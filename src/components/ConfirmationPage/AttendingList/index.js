import React, { Component } from 'react'
import { CheckCircle } from 'react-feather'

class AttendingList extends Component {
  constructor(props) {
    super(props)

    this.attending = []

  }
  /**
   * Rendering method that displays if a user signed in the for event. 
   * Where event is the birthday party.
   */
  createTasks = (attendee, i) => {
    return (
      <div style={{ position: 'relative' }} className="attendee-item" key={attendee.name + 'coming'}>
        <p className="attendee-text">{attendee.name}</p>
        <CheckCircle color="green" className="sent-button" />
        <p
          className="joined-text"
          style={{
            position: 'absolute',
            left: '20px',
            bottom: 0,
            color: '#888',
            fontStyle: 'italic',
            fontSize: '.8rem'
          }}>
          {i+1}. - Gick med: {new Date(attendee.joined).toLocaleDateString("sv-SE", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"
          })}
        </p>
      </div >
    )
  }


  componentWillReceiveProps() {
    if (this.props.attending) {

      const listAttending = this.props.attending.map(this.createTasks)

      this.invited = listAttending
    }
  }

  render() {


    return (
      <div className="attending-list-wrapper">
        <div className="attending-list-container">
          {this.invited}
        </div>
      </div>
    )
  }
}

export default AttendingList