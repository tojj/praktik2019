import React from 'react'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      msg: `<div style="padding:50px; text-align:center">
        <h2 style="color:#4762b7; font-size:2rem;">Jessika, du är bjuden på kalas!</h2>
        <p>Tojj vill bjuda in dig på sitt kalas: klicka på <a style="text-decoration:none;color:#4762b7" href="https://tojj.se/kalas/TO2qK4">här</a> för att komma direkt till kalaset eller scanna QR-koden nedan.</p>
        <p><img width="200px" height="200px" src="http://qr-generator.qrcode.studio/tmp/892f11780f0ef9c7cee281ac3ac184a0.svg?1557480020820" alt="qr-kod"/></p>
        <p style="font-style:italic;">Obs. Detta meddelande har genererats från en server och går inte att svara på.</p>
      </div>`,
      sent: this.status
    }
    this.status = ''
    this.sendEmail = this.sendEmail.bind(this)
  }
clickHandler = () => {
  console.log(this.state.sent);
  
  this.sendEmail(this.state.name, this.state.email, this.state.msg)
}
changeHandler = (e) => {
  if (e.target.id === 'name'){
    this.setState({name: e.target.value})
    console.log(this.state.name);
  }
  if (e.target.id === 'email'){
    this.setState({email: e.target.value})
    console.log(this.state.email);
  }
  if (e.target.id === 'msg'){
    this.setState({msg: e.target.value})
    console.log(this.state.msg);
  }
}

sendEmail (name, email, message) {
  fetch('/json/send', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message
    })
  })
  .then((res) => res.json())
  .then((res) => {
    console.log('here is the response: ', res);
    this.status = 'sent'
    console.log(this.state.sent);
    
  })
  .catch((err) => {
    console.error('here is the error: ', err);
  })
 }
  render() {
    return (
      <div style={{width: '50vw', margin: '50px auto', background: 'white', padding: '20px'}}>
        <h2>TESTMAIL</h2>
        Namn:
        <input onChange={this.changeHandler} type="text" className="w-100" id="name" />
        Email:
        <input onChange={this.changeHandler} type="email" className="w-100" id="email" />
        Msg:
        <input onChange={this.changeHandler} type="text" className="w-100" id="msg" />
        {this.state.sent ? null
        : <button onClick={this.clickHandler}>Skicka</button>}
      </div>
    )
  }
}

export default Test