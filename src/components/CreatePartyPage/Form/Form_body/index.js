import React from 'react'
import EventInput from './Event_input/index'
import SwishQR from '../../SwishQR/index'

const FormBody = (props) => (
  <div className="form-body-container">
    <EventInput />
    <SwishQR />
  </div>
)

export default FormBody

