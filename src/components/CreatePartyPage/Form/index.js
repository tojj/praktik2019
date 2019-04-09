import React from 'react'
import FormHeader from './Form_header/index'
import FormBody from './Form_body/index'
import FormFooter from './Form_footer/index'

const Form = props => (
  <div className="form-container">
    <FormHeader />
    <FormBody />
    <FormFooter />
  </div>
)

export default Form
