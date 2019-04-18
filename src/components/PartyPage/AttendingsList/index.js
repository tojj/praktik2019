import React from 'react'
import Attendee from './Attendee/index'

const AttendingsList = (props) => {
  return (
    <div className="box-container">
      <div className="box list-holder">
        {props.attendees.map((attendee, i) => {
          return <Attendee attendee={attendee} key={"attendee_" + i} />
        })}
      </div>
    </div>
  )
}

export default AttendingsList