import React, { Component } from 'react'
import { eventInputData } from '../../../../../staticData'
import { connect } from 'react-redux'
import { updateBdayTimeAndPlace } from '../../../../../store/Birthday/BirthdayActions'
import InputEvent from './InputEvent'
import {
  FormGroup,
  Label
} from 'reactstrap'
import ToolTip from '../../../../ToolTip';

class EventInput extends Component {
  constructor(props) {
    super(props)

    this.time = ''
    this.deadline = ''

  }

  /**
   * Rendering input fields
   */
  renderInputs = () => this.props.birthdayTimeAndPlace
    ? Object.keys(this.props.birthdayTimeAndPlace).sort().map(this.renderInput)
    : null


  renderInput = key => (
    <FormGroup key={key} className={eventInputData[key].classNameFormGroup}>
      <Label
        style={{position: 'relative !important'}}
        htmlFor={eventInputData[key].name}
        className={eventInputData[key].classNameLabel}>
        {eventInputData[key].text} {eventInputData[key].tooltip ? <ToolTip text={eventInputData[key].tooltip} /> : '' }
        </Label>
      <InputEvent
        name={eventInputData[key].name}
        keyVal={key}
        value={this.props.birthdayTimeAndPlace[key]}
        type={eventInputData[key].type}
        placeholder={eventInputData[key].placeholder}
        className={eventInputData[key].className}
        callback={this.callback}
        id={eventInputData[key].id}
        rows={eventInputData[key].rows ? eventInputData[key].rows : ''}
      />
    </FormGroup>
  )

  /**
 * Callback function handling values from inputs
 */

  callback = (value, key) => {
    this.props.updateTimeAndPlace({ [key]: value })

    /**
     * Function that takes the value
     * And remove the space
     */
    if(key === "eZip" &&  /\s/.test(value) ){
      this.props.updateTimeAndPlace({ [key]: value.replace(/\s+/g, "")})
    }

    let week = Date.now() + 604800000


    if (key === "bDate") {
      this.time = new Date(value)
      if (this.time.getTime() < week) {
        let id = key;
        let element = document.getElementById(id)
        element.classList.add("invalid")
      } else {
        let id = key;
        let element = document.getElementById(id)
        element.classList.remove("invalid")
      }

    }


    if (value.length > 1 && key === "asv") {
      let id = key;
      let element = document.getElementById(id)
      element.classList.remove("invalid")
    } else if (key === "asv") {
      let id = key;
      let element = document.getElementById(id)
      element.classList.add("invalid")
    }

    if (key === "gDeadline" && this.time) {
      this.deadline = new Date(value)
      const osa = this.time.getTime()-172800000
      if (this.deadline.getTime() < this.time.getTime() && osa > this.deadline.getTime() && this.deadline.getTime() > Date.now()) {
        let id = key;
        let element = document.getElementById(id)
        element.classList.remove("invalid")
      } else {
        let id = key;
        let element = document.getElementById(id)
        element.classList.add("invalid")


      }

    }
    if(value.length > 1 && value.length < 280 && key === "aDescription"){
      let id = key;
      let element = document.getElementById(id)
      element.classList.remove("invalid")
    } else if(value.length > 250 && key === "aDescription"){
      let id = key;
      let element = document.getElementById(id)
      element.classList.add("invalid")
    }

    else if(value.length < 2 && key === "aDescription"){
      let id = key;
      let element = document.getElementById(id)
      element.classList.add("invalid")
    }
  }

  render() {
    return (
      <div className="box-container">
        <div className="box">
          <h2 className="form-headline">Var, när <br /> &amp; hur?</h2>
          <img className="box-img fg-image" src="/images/general/time-place.png" alt="event" />
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