import React from "react"

import {
  Input,
  FormGroup,
  Label
} from "reactstrap"

import { connect } from 'react-redux'
import { updateSwish } from '../../../../../store/Swish/SwishActions'

class SwishQR extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgEl: "",
      value: ""
    }
  }

  handleChange = e => {
    const val = e.target.value
    const max = 151
    const maxLength = max - 1
    if (val < max) {
      this.setState({ value: val })
      this.props.updateSwishAmount(val)

    } else if (val > max) {
      this.setState({ value: maxLength })
      this.props.updateSwishAmount(maxLength)

    }

  }

  render() {
    return (
      <div className="box-container" id="swish-container">
        <div className="box text-left">
          <h2 className="form-headline">Swish</h2>
          <FormGroup className="swish-form">
            <Label for="amount-input">Belopp för Swish</Label>
            <Input
              type="number"
              name="number"
              min="50"
              max="150"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="100"
              id="amount-input"
              className="input50"
            />
          </FormGroup>
        </div>
        <div className="box">
          <img
            className="qr-img"
            src="/images/convincer5.png"
            alt="qr code"
          />
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    swishMoney: state.swish.swishMoney,
  }
}

const mapDispatchToProps = dispatch => ({
  updateSwishAmount: (data) => dispatch(updateSwish(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(SwishQR)
