import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Takes "link" & "linkName" as props to render extra navigation help.
 * Can also take an optional Title message
 */

class MissingPage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="mp-container">
        <h1 className="mp-header">{this.props.title ? this.props.title : 'Sidan saknas'}</h1>
        <h4 className="mp-info">
          Vi kunde tyvärr inte hitta sidan {window.location.pathname}
        </h4>
        <Link className="btn btn-outline-primary" to={this.props.link ? this.props.link : "/"}>{this.props.link ? this.props.linkName : 'Tillbaka till Start'}</Link>
        <img className="mp-background" src="/images/missingPageImg.png" />
      </div>
    )
  }
}

export default MissingPage