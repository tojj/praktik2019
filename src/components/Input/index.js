import React from 'react'

const Input = ({ val, callback, keyVal, placeholder, className }) => {
  /**
   * Handles onChange
   * @param value
   * @private
   */

  const _onChange = ({ target: { value } }) => {
    callback(value, keyVal)
  }

  return (
    <input
      type="text"
      onChange={_onChange}
      value={val}
      placeholder={placeholder}
      className={className}
    />
  )
}

export default Input