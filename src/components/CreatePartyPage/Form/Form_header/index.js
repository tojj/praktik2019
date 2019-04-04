import React from 'react'
import staticData from '../../../../staticData'
import ImageHandler from './ImageHandler/index'

const Form_header = (props) => (
  <div className="form-header-container">
    <div className="box-container">
      <div className="box">
        <h2 className="form-headline">Skapa Kalas</h2>
        <form>
          {(staticData.formHeaderData.map(renderLabels))}
        </form>
      </div>
      <div className="box">
        <ImageHandler />
      </div>
    </div>
  </div>
)

const renderLabels = ({ className, defaultValue, id, text }) => {

  return (
    <label className="birthday-label" key={id}>
      {text}
      <input className={className} rows="2" type="text" defaultValue={defaultValue} />
    </label>
  )
}


export default Form_header

