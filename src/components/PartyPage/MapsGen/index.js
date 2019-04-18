import React from 'react'

const MapsGen = (props) => {
  return (
    <div
      className="mapouter"
      style={{
        position: 'relative',
        textAlign: 'right',
        height: '500px',
        width: '100%'
      }}>
      <div
        className="gmap_canvas"
        style={{
          overflow: 'hidden',
          background: 'none !important',
          height: '500px',
          width: '100%'
        }}>
        <iframe
          width="100%"
          height="500px"
          id="gmap_canvas"
          src={"https://maps.google.com/maps?q=" + props.query + "&t=&z=15&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
        </iframe>
      </div>
    </div>
  )
}

export default MapsGen