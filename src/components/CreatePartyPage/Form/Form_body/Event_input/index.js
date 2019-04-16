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
      <FormGroup>
        <Label className="birthday-label">Skriv några ord till de inbjudna</Label>
        <Input type="textarea" className="textarea-label form-input input100" />
      </FormGroup>
      <FormGroup>
        <Label className="birthday-label">När är kalaset?</Label>
        <div className="time-label">
          <Input className="form-input input50" rows="2" type="date" />
          <Input className="form-input input25 mt-2 mt-lg-0" rows="2" type="time" defaultValue="12:00" />
        </div>
        <FormGroup>
        </FormGroup>
        <Label className="location-label">Plats</Label>
        <Input className="form-input input100" rows="2" type="text" placeholder="Gatuadress" />
        <div className="time-label">
          <Input className="form-input input25 mt-2" rows="2" type="text" placeholder="Postnr" />
          <Input className="form-input input50 mt-2" rows="2" type="text" placeholder="Stad" />
        </div>
      </FormGroup>
      <FormGroup>
        <Label className="birthday-label">När vill du senast ha svar om vem som kommer?</Label>
        <Input className="form-input input50" rows="2" type="date" />
      </FormGroup>
    </div>
  </div>
)

export default EventInput

