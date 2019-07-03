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
    if (e.target.value < 50){
      this.setState({error: true})
    } else {
      this.setState({error: false})
    }
  }

  render() {
    return (
      <div id="swish-container">
        <div className="box text-left">
          <FormGroup className="swish-form">
            <Label for="amount-input">Hur mycket ska gästerna bidra med?</Label>
            <Input
              type="number"
              name="swishMoney"
              onChange={this.handleChange}
              defaultValue={this.props.swishMoney ? this.props.swishMoney : ''}
              placeholder="Belopp i SEK per person"
              id="amount-input"
              className="input50 swish-width"
              style={this.state.error ? {borderColor: 'red'} : {borderColor:'rgba(0,0,0,0.1)'}}
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
