import React from 'react'

class BirthdayInvite extends React.Component {

  render() {

    return (
      <div className="invite-wrapper">
        <form className="email-form" onSubmit={this.props.addEmail}>
          <input
            className="target-invite-input"
            placeholder="e-post"
            ref={this.props.inputElement}
            value={this.props.currentEmail.text}
            onChange={this.props.handleInput}
            type="email"
          />
          <button className="link-party-page add-email" type="submit">Lägg till</button>
        </form>
      </div>
    )
  }
}


export default BirthdayInvite