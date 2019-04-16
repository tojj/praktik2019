import React from "react"
import { FormGroup, Label, Input } from "reactstrap"

const InputEvent = ({ name, type, placeholder, value, className, onChange }) => {

  return (
    <Input
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  )
}


/**
 * onChange method needs to be added
 */

export default InputEvent