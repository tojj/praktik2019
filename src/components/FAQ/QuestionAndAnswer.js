import React from 'react'
import { 
  ChevronUp,
  ChevronDown
} from 'react-feather'


class QuestionAndAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
      arrow: <ChevronDown />
    }
  }

  /**
   * If toggle=false, set to true and run the parents pushcounter-method 
   * with the child's ID as an argument. If not, set it to false.
   */
  toggle = () => {
    if(!this.state.toggle){
      this.setState({
        toggle: !this.state.toggle,
        arrow: <ChevronUp />
      })
      this.props.clickHandler(this.props.id)
    } else {
      this.setState({
        toggle: !this.state.toggle,
        arrow: <ChevronDown />
      })
    }
    
  }

  render() {
    return (
      <div className="qna-item border-bottom" >
        <div onClick={this.toggle} style={{cursor: 'pointer'}}>
          <p style={{fontWeight: 'bold'}}>{this.props.question}, {this.props.count} {this.state.arrow}</p>
        </div>
        {this.state.toggle
          ? <div>
            <p>{this.props.answer}</p>
          </div>
          : null}
      </div>
    )
  }
}


export default QuestionAndAnswer