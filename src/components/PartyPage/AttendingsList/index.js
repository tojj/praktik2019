import React from 'react'
import axios from 'axios'
import Attendee from './Attendee/index'

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

    let event = await axios({
      method: 'get',
      url: `/api/events/id/${this.props.event}`
    })
    event = event.data
    event.attending.push(newAttendee)

    await axios({
      method: 'put',
      url: `/api/events/id/${this.props.event}/edit`,
      data: {
        content: event
      }
    })
    this.setState({ attendees: event.attending })
    this.clickHandler()
  }

  render() {
    return (
      <div>
        <div className="list-holder">
          {this.state.attendees.length > 0 
          ? this.state.attendees.map((attendee, i) => {
            return <Attendee attendee={attendee} key={"attendee_" + i} index={i} />
          }) 
          : <p style={{color: '#444655', fontSize: '1.5rem'}}>Än så länge har ingen skrivit upp sig :(</p>
          }
        </div>
        {this.state.showInput ? <div className="pt-2">
          <input type="text" placeholder="namn" id="input-att-name" />
          <input type="email" placeholder="epost" id="input-att-email" className="ml-2" /> <br />
          <button type="button" className="btn btn-danger mt-3" onClick={this.clickHandler}>Tillbaka</button>
          <button type="button" className="btn btn-success mt-3 ml-2" onClick={this.saveAttendeeToDB}>Bekräfta</button>
        </div>
          : <button type="button" className="btn btn-outline-primary mt-5" onClick={this.clickHandler}>Jag kommer!</button>}
      </div>
    )
  }
}


export default AttendingsList