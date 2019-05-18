import React, { Component } from 'react'
import { formHeaderData } from '../../../../staticData'
import ImageHandler from './ImageHandler/index'
import { connect } from 'react-redux'
import { updateBirthday, doUpdateValidation } from '../../../../store/Birthday/BirthdayActions'
import Input from '../../../Input/index'
import {
  FormGroup,
  Label
} from 'reactstrap'




class Form_header extends Component {
  constructor(props) {
    super(props)
  }

  // constructor(props) {
  //   super(props)

  //   this.errors = []
  //   this.schemaPartyEvent = {
  //     formHeaderDataTitle: Joi.string().min(2).max(20).required(),
  //     formHeaderDataName: Joi.string().min(2).max(20).required(),
  //     formHeaderDataAge: Joi.number().integer().required()
  //   }
  // }
  // /**
  //  * An advanced simple action
  //  */

  // simpleAction = (event) => {
  //   this.props.updateBday(event.target.value)
  // }

  // validateBirthdayEvent = () => {
  //   const result = Joi.validate(this.props.birthdayEvent, this.schemaPartyEvent, {
  //     abortEarly: false
  //   })
  //   console.log(result, "validated stuff");

  //   if (!result.error) return null

  //   //if there are errors:

  //   const errors = {}
  //   for (let item of result.error.details) {
  //     errors[item.path[0]] = item.message
  //     let id = item.path[0]
  //     console.log(item.path[0], "this is the path")
  //     console.log(id, "this is the id")

  //     let element = document.getElementById(id)
  //     element.classList.add("invalid")
  //     console.log(this.props.birthdayEvent.id, "the valueeeeeeeeeeeeeeeeeeee");
  //     console.log(this.props.input.isValid, "PROPS");
  //     // if (this.props.input.isValid === false) {

  //     //   element.classList.add("invalid")
  //     // }

  //     // document.getElementById(id).onchange = this.functiontoTest(e)

  //     // element.addEventListener("change", this.functiontoTest(id))
  //     // console.log(element, "this is interesting nowwww")


  //   }

  //   this.errors.push(errors)
  //   console.log(errors)


  // }



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
      {!this.props.input.isValid ? <p>*</p> : ""}
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
    let obj = this.props.birthdayEvent
    console.log("v", this.props.birthdayEvent)
    let element = document.getElementById(key)
    if (key === "formHeaderDataTitle" && value.length < 2) {

      element.classList.add("invalid")
    } else if (key === "formHeaderDataName" && value.length < 2) {
      element.classList.add("invalid")
    } else if (key === "formHeaderDataAge" && value.length < 2) {
      element.classList.add("invalid")

    } else {
      element.classList.remove("invalid")
    }
    // for (let key in obj) {

    //   if (key.length < 2) {
    //     this.props.validate({ isValid: false })
    //   } else {

    //     this.props.validate({ isValid: true })
    //   }
    // }

  }
  // callback = (value, key) => this.props.updateBday({ [key]: value })



  // test = (value) => {
  //   if (value === undefined) {
  //     console.log("testing");
  //   }

  // }

  render() {
    return (
      <div className="form-header-container">
        <div className="box-container force-top">
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
    birthdayEvent: state.birthday.birthdayEvent,
    input: state.birthday.input
  }
}

const mapDispatchToProps = dispatch => ({
  updateBday: (data) => dispatch(updateBirthday(data)),
  validate: (data) => dispatch(doUpdateValidation(data))
})



export default connect(mapStateToProps, mapDispatchToProps)(Form_header)
