import React, { Component } from 'react'
import PartyAttendee from './PartyAttendee/'

class AttendingList extends Component {
  constructor(props) {
    super(props)

    this.attending = []

  }

  componentWillReceiveProps() {
    if (this.props.attending) {

      const listAttending = this.props.attending.map( (attendee, i) => {
        return <PartyAttendee attendee={attendee} key={'attending_' + i} index={i} />
      })

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