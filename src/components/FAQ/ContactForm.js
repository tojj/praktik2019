import React from 'react'

const ContactForm = () => {
  return (
    <div>
      Namn: <br />
      <input type="text" /> <br />
      Epost: <br />
      <input type="email" /> <br />
      Meddeland: <br />
      <textarea /> <br /> <br />
      <button className="btn btn-primary">Skicka!</button>
    </div>
  )
}

export default ContactForm