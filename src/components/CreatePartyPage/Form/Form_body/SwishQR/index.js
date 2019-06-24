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
    }
  }

  handleChange = e => {
    const val = e.target.value
    this.props.updateSwishAmount(val)
  }

  render() {
    return (
      <div id="swish-container">
        <div className="box text-left">
          <FormGroup className="swish-form">
            <Label for="amount-input">Belopp för Swish</Label>
            <Input
              type="number"
              name="number"
              onChange={this.handleChange}
              placeholder="100"
              id="amount-input"
              className="input50 swish-width"
            />
          </FormGroup>
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
