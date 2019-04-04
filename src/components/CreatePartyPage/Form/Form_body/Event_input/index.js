import React from 'react'

const FormBody = (props) => (

  <div className="box-container">
    <div className="box">
      <h2 className="event-heading">Var, när <br /> &  hur?</h2>
      <img className="box-img fg-image" src="/images/time-place.png" alt="event" />
    </div>
    <div className="box">
      <form>
        <label className="birthday-label">
          <span className="input-heading"> Skriv några ord till de inbjudna:</span>
          <textarea className="textarea-label form-input input100" value="Skriv gärna någonting om kalaset..." />
        </label>
        <label className="birthday-label">
          <span className="input-heading"> När är kalaset?</span>
          <div className="time-label">
            <input className="form-input input25" rows="2" type="text" placeholder="2019-04-13" />
            <input className="form-input input25" rows="2" type="text" placeholder="14:00" />
          </div>
        </label>
        <label className="birthday-label">
          <span className="input-heading">Plats:</span>
          <input className="form-input input100" rows="2" type="text" placeholder="Skattkammargatan 7" />
          <div className="time-label">
            <input className="form-input input25" rows="2" type="text" placeholder="127 44" />
            <input className="form-input input25" rows="2" type="text" placeholder="Trollhättan" />
          </div>
        </label>
        <label className="birthday-label">
          <span className="input-heading">När vill du senast ha svar om vem som kommer?</span>
          <input className="form-input input100" rows="2" type="date" />
        </label>
      </form>
    </div>
  </div>
)

export default FormBody

