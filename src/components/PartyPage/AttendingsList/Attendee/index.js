import React from 'react'

const styling = {
  background: '#4762b7',
  color: '#fff',
  fontSize: '1rem',
  borderRadius: '10px',
  minWidth: '200px',
  marginBottom: '10px'
}
const Attendee = (props) => {
  return (
    <div 
      className="list-attendee"
      style={styling}>
      {props.attendee.name}
    </div>
  )
}

export default Attendee