import React from "react"
import {
  Input,
  FormGroup,
  Label
} from "reactstrap"
import { connect } from 'react-redux'
import ToolTip from '../../../../ToolTip'
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
    if (e.target.value < 50) {
      this.setState({ error: true })
    } else {
      this.setState({ error: false })
    }
  }

  render() {
    return (
      <div id="swish-container" className="swish-container">
        <FormGroup className="swish-form">
          <Label for="amount-input" className="birthday-label">Swishbelopp <ToolTip text="Välj en rimlig summa för varje gäst att swisha in." /></Label>
          <Input
            type="number"
            name="swishMoney"
            onChange={this.handleChange}
            defaultValue={this.props.swishMoney ? this.props.swishMoney : ''}
            placeholder="Belopp i SEK per person"
            id="amount-input"
            className=""
            style={this.state.error ? { borderColor: 'red' } : { borderColor: 'rgba(0,0,0,0.1)' }}
          />
        </FormGroup>
        <p style={{
          position: 'relative',
          width: '100%',
          maxWidth: '800px',
          fontWeight: '600',
          fontSize: '1.2rem',
          color: '#444655',
          fontFamily: 'Montserrat',
          margin: '2rem auto',
          display: 'block',
          padding: '30px',
          border: '5px dotted #B164B8'
        }}>
          Istället för att ta med egna presenter, går de inbjudna gästerna ihop för att tillsammans betala för presenten du har valt ovan.
          </p>
      </div >
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
