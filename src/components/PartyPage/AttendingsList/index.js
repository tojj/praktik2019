import React from 'react'
import Attendee from './Attendee/index'
import REST from '../../../REST'

class Event extends REST { }

class AttendingsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showInput: false,
      id: this.props.event
    }
    this.sendToDB = this.sendToDB.bind(this)
  }
  clickHandler = () => {
    this.setState({ showInput: !this.state.showInput })
  }
  async sendToDB() {
    const newAttendee = {
      "name": document.getElementById('input-att-name').value,
      "email": document.getElementById('input-att-email').value,
      "joined": new Date().getTime()
    }
    console.log(newAttendee);
    
    let event = await Event.find(this.props.event)
    console.log(event.attending);
    event.attending.push(newAttendee)
    console.log(event.attending);
    await event.save()
    console.log('Saved');
    

    
    
    // event.attendees.push
    // const found = await events.find(event => {return event._id === id} )
    // console.log(found);
  }
  render() {
    return (
      <div>
        <div className="list-holder">
          {this.props.attendees.map((attendee, i) => {
            return <Attendee attendee={attendee} key={"attendee_" + i} />
          })}
        </div>
        {this.state.showInput ? <div>
          <input type="text" placeholder="namn" id="input-att-name" />
          <input type="email" placeholder="epost" id="input-att-email" className="ml-2" /> <br />
          <button type="button" className="btn btn-danger mt-3" onClick={this.clickHandler}>Tillbaka</button>
          <button type="button" className="btn btn-success mt-3 ml-2" onClick={this.sendToDB}>Bekräfta</button>
        </div>
          : <button type="button" className="btn btn-primary" onClick={this.clickHandler}>Jag kommer!</button>}

      </div>
    )
  }
}


export default AttendingsList