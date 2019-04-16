import React from 'react'
import {
  FormGroup,
  Label,
  Input
} from 'reactstrap'

const EventInput = (props) => (

  <div className="box-container">
    <div className="box">
      <h2 className="form-headline">Var, när <br /> &amp; hur?</h2>
      <img className="box-img fg-image" src="/images/time-place.png" alt="event" />
    </div>
    <div className="box text-left">
      <FormGroup className="input100">
        <Label htmlFor="description" className="birthday-label">Skriv några ord till de inbjudna</Label>
        <Input id="description" type="textarea" className="textarea-label form-input " />
      </FormGroup>
      <FormGroup className="input50">
        <Label htmlFor="date" className="birthday-label">När är kalaset?</Label>
        <Input id="date" className="form-input" type="date" />
      </FormGroup>
      <FormGroup className="input25">
        <Label htmlFor="time" className="birthday-label"></Label>
        <Input id="time" className="form-input mt-2 mt-lg-0" type="time" defaultValue="12:00" />
      </FormGroup>
      <FormGroup className="input100">
        <Label htmlFor="street" className="location-label">Plats</Label>
        <Input id="street" className="form-input" type="text" placeholder="Gatuadress" />
      </FormGroup>
      <FormGroup className="input25">
        <Label htmlFor="zip" className="location-label inline-input"></Label>
        <Input id="zip" className="form-input mt-2" type="text" placeholder="Postnr" />
      </FormGroup>
      <FormGroup className="input50">
        <Label htmlFor="city" className="location-label inline-input "></Label>
        <Input id="city" className="form-input mt-2 " type="text" placeholder="Stad" />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="deadline" className="birthday-label">När vill du senast ha svar om vem som kommer?</Label>
        <Input id="deadline" className="form-input input50" type="date" />
      </FormGroup>
    </div>
  </div >



)

export default EventInput

