import React from 'react'

const Form_header = (props) => (
  <div className="form-header-container">
  <h1 className="form-headline">Skapa Kalas</h1>
  <div className="box-container">
    <div className="box">
      <form className="">
        <label  className="birthday-label">
          Vad vill du ha som rubrik?
        <input className="birthday-headline input100" rows="2" type="text" defaultValue="Dunderkalas med hoppborg! Hoppas ni kan komma" />
        </label>
        <label  className="birthday-label">
          Vad vill du ha som rubrik?
        <input className="birthday-headline input100" rows="2" type="text" defaultValue="Dunderkalas med hoppborg! Hoppas ni kan komma" />
        </label>
        <label  className="birthday-label">
          Vad vill du ha som rubrik?
        <input className="birthday-headline input100" rows="2" type="text" defaultValue="Dunderkalas med hoppborg! Hoppas ni kan komma" />
        </label>
      </form>
    </div>

    <div className="box">

    </div>
  </div>
  </div>
)

export default Form_header

