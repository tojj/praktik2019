import React, { Component } from 'react'
import { formHeaderData } from '../../../../staticData'
import ImageHandler from './ImageHandler/index'
import { connect } from 'react-redux'
import { updateBirthday } from '../../../../store/Birthday/BirthdayActions'
import Input from '../../../Input/index'
import {
  FormGroup,
  Label
} from 'reactstrap'


class Form_header extends Component {

  /**
   * An advanced simple action
   */

  simpleAction = (event) => {
    this.props.updateBday(event.target.value)
  }

  /**
   * Render birthday date
   */

  renderBirthdayDate = () => this.props.birthdayEvent.age
    ? <span>{this.props.birthdayEvent.age}</span> 
    : console.log(this.props.birthdayEvent.age)
      
  /**
   * Rendering my input fields here, so all three are shows
   * I am doing this using Object.keys and map
   */

  renderInputs = () => this.props.birthdayEvent
    ? Object.keys(this.props.birthdayEvent).map(this.renderInput)
    : null


  renderInput = key => (
    <FormGroup key={key}>
      <Label className="birthday-label">
        {formHeaderData[key].text}
      </Label>
      <Input
        className={formHeaderData[key].className}
        keyVal={key}
        val={this.props.birthdayEvent[key]}
        callback={this.callback}
        placeholder={formHeaderData[key].defaultValue}
      />
    </FormGroup>
  )

  /**
   * My callback function
   */

  callback = (value, key) => this.props.updateBday({ [key]: value })

  render() {
    return (
      <div className="form-header-container">
        <div className="box-container force-top">
          <div className="box text-left">
            <h2 className="form-headline">Skapa Kalas</h2>
            <div>
              {this.renderInputs()}
              {/*this.renderBirthdayDate()*/}
            </div>
          </div>
          <div className="box force-top">
            <ImageHandler />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    birthdayEvent: state.birthday.birthdayEvent
  }
}

const mapDispatchToProps = dispatch => ({
  updateBday: (data) => dispatch(updateBirthday(data))
})



export default connect(mapStateToProps, mapDispatchToProps)(Form_header)
