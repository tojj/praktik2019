import React from 'react'

const even = {
  background: '#4762b7',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '10px',
  border: '1px solid rgba(0,0,0,0.1)',
  minWidth: '30%',
  maxWidth: '33%',
  marginBottom: '10px',
  display: 'inline-block',
  margin: '5px'
}

const odd = {
  background: '#fbf7ee',
  color: '#444655',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '10px',
  border: '1px solid rgba(0,0,0,0.1)',
  minWidth: '30%',
  maxWidth: '33%',
  marginBottom: '10px',
  display: 'inline-block',
  margin: '5px'
}

const Attendee = (props) => {
  return (
    <div
      className="list-attendee"
      style={props.index%2 === 1 ? odd : even}>
      {props.attendee.name}
    </div>
  )
}

export default Attendee