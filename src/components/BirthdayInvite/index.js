import React from 'react'

class BirthdayInvite extends React.Component {
  onEnterPress = (event) => {

    if (event.key === 'Enter') {
      document.getElementById('submit-email').click();
    }
  }
  render() {

    return (
      <div>
        <form className="email-form" onSubmit={this.props.addEmail}>

          <input
            className="email-input"
            placeholder="e-post"
            id="email-input"
            ref={this.props.inputElement}
            value={this.props.currentEmail.text}
            onChange={this.props.handleInput}
            onKeyPress={this.onEnterPress}
            type="email"
          />
          <button type="submit" id="submit-email" className="submit-email btn btn-outline-info">Lägg till</button>

        </form>
      </div>
    )
  }
}


export default BirthdayInvite