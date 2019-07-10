import React from 'react'
import { Info } from 'react-feather'

const ToolTip = ({text}) => {
  return (
    <div className="tooltip-box"> <Info size="16" />
      <span className="tooltip-text">{text}</span>
    </div>
  )
}


export default ToolTip