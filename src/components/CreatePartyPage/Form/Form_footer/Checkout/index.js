import React from 'react'
import { Button, Input, FormGroup, Label } from 'reactstrap'


class Checkout extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="box-container" id="checkout-container">
        <div className="box text-left">
          <h2 className="form-headline">Skapa konto</h2>
          <FormGroup>
            <Label for="email-input">E-post</Label>
            <Input type="email" name="email" id="email-input" placeholder="E-post" />
          </FormGroup>
          <FormGroup>
            <Label for="Pssword-input">Lösenord</Label>
            <Input type="password" name="password" id="password-input" placeholder="Lösenord" />
          </FormGroup>
          <Button color="primary" type="button" >Registrera</Button>
        </div >

        <div className="box">
          <h2 className="form-headline">Fortsätt utan konto</h2>
          <Button color="primary" type="button" >Slutför</Button>
        </div>
      </div >)


  }
}

export default Checkout