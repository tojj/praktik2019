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

  /**
   * Saves attendee to DB.
   */
  async saveAttendeeToDB(e) {
    e.preventDefault()
    const newAttendee = {
      name: document.getElementById('input-att-name').value,
      email: document.getElementById('input-att-email').value,
      comment: document.getElementById('input-att-comment').value,
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
            : <p style={{ color: '#444655', fontSize: '1.5rem' }}>Än så länge har ingen skrivit upp sig :(</p>
          }
        </div>
        {this.state.showInput
          ? <div className="attending-form">
            <form onSubmit={this.saveAttendeeToDB} >
              <input type="text" placeholder="Namn *" required id="input-att-name" className="attendee-input" />
              <input type="email" placeholder="Epost *" required id="input-att-email" className="attendee-input" />
              <input type="text" placeholder="Kommentar/allergier" id="input-att-comment" className="attendee-input" />
              <button type="button" className="btn btn-danger mt-3" onClick={this.clickHandler}>Tillbaka</button>
              <input type="submit" className="btn btn-success mt-3 ml-2" value="Bekräfta" />
            </form>
          </div>
          : <button type="button" className="btn btn-outline-info mt-5" onClick={this.clickHandler}>Gå med på listan</button>}
      </div>
    )
  }
}


export default AttendingsList