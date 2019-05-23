import React from "react"
import FormHeader from "./Form_header/index"
import FormBody from "./Form_body/index"
import WebShop from "./Web_shop/index"
import FormFooter from "./Form_footer/index"
import { Form } from "reactstrap"

const FormContainer = props => (
  <Form className="form-container">
    <FormHeader test={props.test} />
    <FormBody />
    <WebShop />
    <FormFooter />
  </Form>
)

export default FormContainer
