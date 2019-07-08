import React from 'react'
import { ChevronUp, ChevronDown } from 'react-feather'

class PartyAttendee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false

    }

  }
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    const attendee = this.props.attendee
    const key = this.props.index
    return (
      <div>
        <div style={{ position: 'relative', cursor: 'pointer' }} className="attendee-item" onClick={this.toggle}>
          <p className="attendee-text">{attendee.name}{attendee.comment ? ' *' : ''}</p>
          {this.state.toggle ? <ChevronUp className="sent-button" /> : <ChevronDown className="sent-button" />}
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
            {key + 1}. - Gick med: {new Date(attendee.joined).toLocaleDateString("sv-SE", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric"
            })}
          </p>
        </div>
        {this.state.toggle
          ? <div style={{ padding: '20px', textAlign: 'left', backgroundColor: '#ededed', boxShadow: 'inset 0px 0px 10px -3px rgba(209,209,209,1)' }}>
            <p>{attendee.email}</p>
            {attendee.comment ? <p style={{ fontStyle: 'italic', marginTop: '1rem' }}>"{attendee.comment}"</p> : ''}
          </div>
          : ''}

      </div>
    )
  }
}

export default PartyAttendee