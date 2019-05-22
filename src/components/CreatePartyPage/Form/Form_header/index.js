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
  constructor() {
    super()
    this.state = {
      invalidInput: false
    }
  }


  /**
   * An advanced simple action
   */

  simpleAction = (event) => {
    this.props.updateBday(event.target.value)
  }


  /**
   * Rendering my input fields here, so all three are shows
   * I am doing this using Object.keys and map
   */

  renderInputs = () => this.props.birthdayEvent
    ? Object.keys(this.props.birthdayEvent).map(this.renderInput)
    : null


  renderInput = key => (
    <FormGroup key={key} >
      <Label className="birthday-label">
        {formHeaderData[key].text}
      </Label>
      <Input
        id={formHeaderData[key].id}
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

  // validateThis() {
  //   let obj = this.props.birthdayEvent
  //   console.log("v", this.props.birthdayEvent);
  //   console.log("functioning");
  //   for (let key in obj) {
  //     if (key.length < 2) {
  //       this.props.validate({ isValid: false })
  //     } else {

  //       this.props.validate({ isValid: true })
  //     }
  //   }

  // }

  callback = (value, key) => {
    this.props.updateBday({ [key]: value })
    if (value.length > 2 && key === 'title') {
      let id = key;
      let element = document.getElementById(id)
      element.classList.remove("invalid")
    } else if (value.length < 2 && key === 'title') {
      let id = key;
      let element = document.getElementById(id)
      element.classList.add("invalid")
    }

    if (value.length > 1 && key === 'name') {
      console.log(key)
      let id = key;
      let element = document.getElementById(id)
      element.classList.remove("invalid")
    } else if (value.length < 2 && key === 'name') {
      let id = key;
      let element = document.getElementById(id)
      element.classList.add("invalid")
    }

    if (/^\d*$/.test(value) && (value === "" || parseInt(value) <= 20) && key === 'age') {
      console.log(value)
      let id = key;
      let element = document.getElementById(id)
      element.classList.remove("invalid")
    } else if (key === 'age') {
      let id = 'age'
      let element = document.getElementById(id)
      element.classList.add("invalid")
    }

  }

  render() {
    return (
      <div className="form-header-container">
        <div className="box-container" style={{zIndex:'30'}}>
          <div className="box text-left">
            <h2 className="form-headline">Skapa Kalas</h2>
            <div>
              {this.renderInputs()}
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
