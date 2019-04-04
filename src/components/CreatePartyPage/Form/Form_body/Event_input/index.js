import React from 'react'

const EventInput = (props) => (
  <div className="box-container">
    <div className="box">
      <h2>Var, när & hur?</h2>
      <img className="box-img fg-image" src="/images/time-place.png" alt="event" />
    </div>
    <div className="box">
      <form>
        <label style={textArea}>
          <textarea >
            Hello there, this is some text in a text area
</textarea>
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
      </form>
    </div>

  </div>
)


const textArea = {
  display: "block"
}
export default EventInput

