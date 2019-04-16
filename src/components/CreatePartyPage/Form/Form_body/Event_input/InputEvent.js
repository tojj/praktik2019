import React from "react"
import { FormGroup, Label, Input } from "reactstrap"

const InputEvent = ({ classNameFormGroup, name, classNameLabel, type, text, placeholder, value, className, onChange, keyVal }) => {

  return (
    <FormGroup className={classNameFormGroup}>
      <Label htmlFor={name} className={classNameLabel}>{text}</Label>
      <Input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
      />
    </FormGroup>
  )
}


/**
 * onChange method needs to be added
 */

export default InputEvent