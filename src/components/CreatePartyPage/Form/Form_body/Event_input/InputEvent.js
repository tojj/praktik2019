import React from "react"
import { FormGroup, Label, Input } from "reactstrap"

const InputEvent = ({ name, type, label, placeholder, value, className, onChange }) => {
  return (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        value={value}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </FormGroup>
  )
}


/**
 * onChange method need to be added
 */

export default InputEvent