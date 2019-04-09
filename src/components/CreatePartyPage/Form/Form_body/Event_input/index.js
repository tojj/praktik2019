import React from 'react'

const EventInput = (props) => (

  <div className="box-container">
    <div className="box">
      <h2 className="event-heading">Var, när <br /> &amp; hur?</h2>
      <img className="box-img fg-image" src="/images/time-place.png" alt="event" />
    </div>
    <div className="box">
      <form>
        <label className="birthday-label">
          <span className="input-heading"> Skriv några ord till de inbjudna:</span>
          <textarea className="textarea-label form-input input100" />
        </label>
        <label className="birthday-label">
          <span className="input-heading">När är kalaset?</span>
          <div className="time-label">
            <input className="form-input input50" rows="2" type="date" />
            <input className="form-input input25" rows="2" type="time" />
          </div>
        </label>
        <label className="birthday-label">
          <span className="input-heading">Plats:</span>
          <input className="form-input input100" rows="2" type="text" placeholder="Gatuadress" />
          <div className="time-label">
            <input className="form-input input25" rows="2" type="text" placeholder="Postnummer" />
            <input className="form-input input25" rows="2" type="text" placeholder="Stad" />
          </div>
        </label>
        <label className="birthday-label">
          <span className="input-heading">När vill du senast ha svar om vem som kommer?</span>
          <input className="form-input input50" rows="2" type="date" />
        </label>
      </form>
    </div>
  </div>
)

export default EventInput

