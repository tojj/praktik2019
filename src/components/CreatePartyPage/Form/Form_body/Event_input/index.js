import React, { Component } from 'react'
import { eventInputData } from '../../../../../staticData'
import { connect } from 'react-redux'
import { updateBdayTimeAndPlace } from '../../../../../store/Birthday/BirthdayActions'
import InputEvent from './InputEvent'
import {
  FormGroup,
  Label
} from 'reactstrap'

class EventInput extends Component {

  /**
   * Passing value from input
   */

  updateInfo = (event) => {
    this.props.updateTimeAndPlace(event.target.value)
  }

  /**
   * Rendering input fields
   */

  renderInputs = () => this.props.birthdayTimeAndPlace
    ? Object.keys(this.props.birthdayTimeAndPlace).map(this.renderInput)
    : null


  renderInput = key => (
    <FormGroup key={key} className={eventInputData[key].classNameFormGroup}>
      <Label htmlFor={eventInputData[key].name} className={eventInputData[key].classNameLabel}>{eventInputData[key].text}</Label>
      <InputEvent
        name={eventInputData[key].name}
        keyVal={key}
        value={this.props.birthdayTimeAndPlace[key]}
        type={eventInputData[key].type}
        placeholder={eventInputData[key].placeholder}
        className={eventInputData[key].className}
        callback={this.callback}
      />
    </FormGroup>
  )

  /**
 * Callback function handling values from inputs
 */

  callback = (value, key) => this.props.updateTimeAndPlace({ [key]: value })


  render() {
    return (
      <div className="box-container">
        <div className="box">
          <h2 className="form-headline">Var, när <br /> &amp; hur?</h2>
          <img className="box-img fg-image" src="/images/time-place.png" alt="event" />
        </div>
        <div className="box text-left">
          {this.renderInputs()}
        </div>
      </div >
    )
  }


}
const mapStateToProps = state => {
  return {
    birthdayTimeAndPlace: state.birthday.birthdayTimeAndPlace
  }
}

const mapDispatchToProps = dispatch => ({
  updateTimeAndPlace: (data) => dispatch(updateBdayTimeAndPlace(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(EventInput)