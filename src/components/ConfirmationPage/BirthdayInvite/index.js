import React from 'react'

class BirthdayInvite extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emailError: false,
      invited: ''
    }
  }
  submitForm = (e) => {
    e.preventDefault()
    const email = document.getElementById('email-input').value
    const emailList = this.props.invitedList.concat() // concat prevents mutation of original array
    const newEmailList = emailList.push(email)
    this.setState({ invited: newEmailList })
    this.props.addEmail(e)
  }
  onEnterPress = (e) => {

    if (e.key === 'Enter') {
      document.getElementById('submit-email').click();
    }
  }
  onChange = (e) => {
    this.props.handleInput(e)
    if (this.props.invitedList && this.props.invitedList.includes(e.target.value)) {
      this.setState({ emailError: true })
    } else {
      this.setState({ emailError: false })

    }
  }
  render() {

    return (
      <div style={{position: 'relative'}}>
        {this.state.emailError ? <p style={{position: 'absolute', top: '-1.75rem', width: '100%', textAlign: 'center' , fontStyle: 'italic', fontSize: '.8rem', color: 'red', margin: '0 auto' }}>Denna epostadressen har redan bjudits in</p> : null}

        <form className="email-form" onSubmit={this.submitForm}>

          <input
            className="email-input"
            placeholder="e-post"
            id="email-input"
            ref={this.props.inputElement}
            value={this.props.currentEmail.text}
            onChange={this.onChange}
            onKeyPress={this.onEnterPress}
            type="email"
            style={this.state.emailError ? { background: 'rgba(255,200,200,0.5' } : {}}
          />
          {this.state.emailError || (document.getElementById('email-input') && document.getElementById('email-input').value.length < 1)
            ? <button type="submit" id="submit-email" disabled className="submit-email btn disabled btn-outline-info">Bjud in</button>
            : <button type="submit" id="submit-email" className="submit-email btn btn-outline-info">Bjud in</button>
          }

        </form>
      </div>
    )
  }
}


export default BirthdayInvite