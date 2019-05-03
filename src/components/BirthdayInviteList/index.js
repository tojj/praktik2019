import React, { Component } from 'react'
import { XCircle } from 'react-feather'

class BirthdayInviteList extends Component {

  createTasks = email => {
    return (
      <div className="theEmails" key={email.key}>
        {email.text}
        <XCircle onClick={() => this.props.deleteEmail(email.key)}/>
      </div>
    )
  }

  render() {
    const todoEntries = this.props.entries
    const listEmails = todoEntries.map(this.createTasks)
    return <div className="email-list-wrapper">{listEmails}</div>
  }
}

export default BirthdayInviteList