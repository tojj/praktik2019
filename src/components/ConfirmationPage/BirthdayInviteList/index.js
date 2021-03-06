import React, { Component } from 'react'
import {
  XCircle,
  CheckCircle
} from 'react-feather'

class BirthdayInviteList extends Component {
  constructor(props) {
    super(props)

    this.invited = []

  }
  /**
   * Rendering method that displays when the email is added, deleted, or sent.
   */
  createTasks = email => {
    if (email instanceof Object) {

      return (
        <div className="email-item" key={email.key}>
          <p className="email-text">{email.text} </p>
          <XCircle className="delete-button" onClick={() => this.props.deleteEmail(email.key)} />
        </div>
      )
    }
    else {

      return (
        <div className="email-item" key={email}>
          <p className="email-text">{email}</p>
          <CheckCircle color="green" className="sent-button" />
        </div>
      )
    }
  }

  componentWillReceiveProps() {
    if (this.props.invitedList) {
      const listInvited = this.props.invitedList.map(this.createTasks)

      this.invited = listInvited
    }
  }
  render() {
    const todoEntries = this.props.entries
    const listEmails = todoEntries.map(this.createTasks)


    return (
      <div className="email-list-wrapper">
        <div className="email-list-container">
          {listEmails}
          {this.invited}
        </div>
      </div>
    )
  }
}

export default BirthdayInviteList