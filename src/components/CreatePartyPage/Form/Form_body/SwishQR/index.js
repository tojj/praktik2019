import React from 'react'
import { Button, Input, FormGroup, Label } from 'reactstrap'

class SwishQR extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgEl: ''
    }
  }
  getAllValuesAndChangeUrl = () => {
    const number = document.getElementById('number-input').value
    let amount = document.getElementById('amount-input').value
    let color = document.getElementById('color-input').value
    if (color === "Blå") {
      color = '#4762b7'
    } else if (color === 'Röd') {
      color = '#B23E4E'
    } else if (color === 'Grön') {
      color = '#008A64'
    }
    const url = "http://betalamedswish.se/API/Get/?n=" + number + "&a=" + amount + "&m=Tojj&la=true&lm=false&s=250"
    const img = <img className="qr-img" src={url} alt="qr code" />

    this.setState({
      color: color,
      imgEl: img,
      value: '',
    })
  }

  handleChange = (e) => {
    const val = e.target.value
    const max = 151
    const maxLength = max.toString().length - 1
    const newVal = val < max ? val : parseInt(val.toString().substring(0, maxLength))
    this.setState({ value: newVal });
  }
  render() {

    return (
      <div className="box-container" id="swish-container">
        <div className="box text-left">
          <h2 className="form-headline">Swish</h2>
          <FormGroup>
            <Label for="number-input">Telefonnummer</Label>
            <Input type="text" name="text" id="number-input" placeholder="0709123456" />
          </FormGroup>
          <FormGroup>
            <Label for="amount-input">Belopp för Swish</Label>
            <Input type="number" name="number" min="50" max="150" value={this.state.value} onChange={this.handleChange} placeholder="100" id="amount-input" />
          </FormGroup>
          <FormGroup>
            <Label for="color-input">Välj färg</Label>
            <Input type="select" name="select" id="color-input">
              <option>Blå</option>
              <option>Röd</option>
              <option>Grön</option>
            </Input>
          </FormGroup>
          <Button color="primary" type="button" onClick={this.getAllValuesAndChangeUrl}>Förhandsvisa QR-kod</Button>
        </div>
        <div className="box">
          <figure className="qr-holder"
            style={{
              backgroundColor: this.state.color,
              marginTop: '50px',
              overflow: 'hidden'
            }}>{this.state.imgEl ? this.state.imgEl :
              <img className="qr-img" src="/images/convincer5.png" alt="qr code" />}
          </figure>
        </div>
      </div>
    )
  }
}
export default SwishQR