import React from 'react'
import Attendee from './Attendee/index'
import REST from '../../../REST'

class Event extends REST { }

class AttendingsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInput: false,
      attendees: this.props.attendees
    }
    this.saveAttendeeToDB = this.saveAttendeeToDB.bind(this)
  }
  clickHandler = () => {
    this.setState({ showInput: !this.state.showInput })
  }
  async saveAttendeeToDB() {
    const newAttendee = {
      name: document.getElementById('input-att-name').value,
      email: document.getElementById('input-att-email').value,
      joined: new Date().getTime()
    }

    let event = await Event.find(this.props.event);
    event.attending.push(newAttendee)

    await event.save()
    this.setState({ attendees: event.attending })
  }

  render() {
    return (
      <div>
        <div className="list-holder">
          {this.state.attendees.map((attendee, i) => {
            return <Attendee attendee={attendee} key={"attendee_" + i} />
          })}
        </div>
        {this.state.showInput ? <div>
          <input type="text" placeholder="namn" id="input-att-name" />
          <input type="email" placeholder="epost" id="input-att-email" className="ml-2" /> <br />
          <button type="button" className="btn btn-danger mt-3" onClick={this.clickHandler}>Tillbaka</button>
          <button type="button" className="btn btn-success mt-3 ml-2" onClick={this.saveAttendeeToDB}>Bekräfta</button>
        </div>
          : <button type="button" className="btn btn-primary" onClick={this.clickHandler}>Jag kommer!</button>}
      </div>
    )
  }
}


export default AttendingsList