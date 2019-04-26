import React from "react"
import { Input } from "reactstrap"

const InputEvent = ({ name, type, callback, placeholder, value, className, onChange, keyVal }) => {

  /**
   * Handling input from the user
   */

  const _onChange = ({ target: { value } }) => {
    callback(value, keyVal)
  }

  return (
    <Input
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={_onChange}
    />
  )
}



export default InputEvent