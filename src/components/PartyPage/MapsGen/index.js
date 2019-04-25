import React from 'react'

const MapsGen = (props) => {
  return (
    <div
      className="mapouter"
      style={{
        position: 'relative',
        textAlign: 'right',
        height: '400px',
        width: '100%'
      }}>
      <div
        className="gmap_canvas"
        style={{
          overflow: 'hidden',
          background: 'none !important',
          height: '400px',
          width: '100%'
        }}>
        <iframe
          title="maps-location"
          width="100%"
          height="400px"
          id="gmap_canvas"
          src={"https://maps.google.com/maps?q=" + props.query + "&t=&z=15&ie=UTF8&iwloc=&output=embed"} 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0">
        </iframe>
      </div>
    </div>
  )
}

export default MapsGen