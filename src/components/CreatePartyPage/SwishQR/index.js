import React from 'react'

class SwishQR extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgEl: <img src="/images/arrow.png" alt="an arrow"/>
    }
  }
  getAllValuesAndChangeUrl = () => {
    const number = document.getElementById('number-input').value    
    const amount = document.getElementById('amount-input').value
    const msg =  document.getElementById('msg-input').value
    let color = document.getElementById('color-input').value
    if (color === "Blå"){
      color = '#4762b7'
    } else if ( color === 'Röd') {
      color = '#B23E4E'
    } else if ( color === 'Grön') {
      color = '#008A64'
  }
    const url = "http://betalamedswish.se/API/Get/?n=" + number + "&a=" + amount + "&m=" + msg + "&la=true&lm=false&s=250"
    const img = <img className="qr-img" src={url} alt="qr code" />

    this.setState({
      color: color,
      imgEl: img
    })
  }
  render() {

    return (
      <div className="box-container" id="swish-container">
        <div className="box">
          <input className="input100 number-input" id="number-input" type="text" placeholder="telenr" />
          <input className="input100 amount-input" id="amount-input" type="text" placeholder="belopp" />
          <input className="input100 msg-input"  id="msg-input" type="text" placeholder="meddelande" />
          <select className="input100 color-input" id="color-input">
            <option>Blå</option>
            <option>Röd</option>
            <option>Grön</option>
          </select>
        </div>
        <div className="box">
          <figure className="qr-holder" style={{ backgroundColor: this.state.color }}>
            {this.state.imgEl}
          </figure>
          <div>
            <button type="button" onClick={this.getAllValuesAndChangeUrl}>Skapa QR-bild</button>
          </div>
        </div>
      </div>
    )
  }
}
export default SwishQR