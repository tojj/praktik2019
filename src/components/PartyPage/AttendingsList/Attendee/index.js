import React from 'react'

const even = {
  background: '#6C80C5',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '10px',
  border: '1px solid rgba(0,0,0,0.1)',
  minWidth: '25%',
  marginBottom: '10px',
  display: 'inline-block',
  margin: '5px',
  padding: '2px 5px',
  textTransform: 'capitalize'

}

const odd = {
  background: '#fbf7ee',
  color: '#444655',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '10px',
  border: '1px solid rgba(0,0,0,0.1)',
  minWidth: '25%',
  marginBottom: '10px',
  display: 'inline-block',
  margin: '5px',
  padding: '2px 5px',
  textTransform: 'capitalize'
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