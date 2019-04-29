import React from 'react'


class QuestionAndAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  /**
   * If toggle=false, set to true and run the parents clickcounter-method 
   * with the child's ID as an argument. If not, set it to false.
   */
  toggle = () => {
    if(!this.state.toggle){
      this.setState({
        toggle: !this.state.toggle
      })
      this.props.clickHandler(this.props.id)
    } else {
      this.setState({
        toggle: !this.state.toggle
      })
    }
    
  }

  render() {
    return (
      <div className="qna-item border-top border-bottom" onClick={this.toggle}>
        <div>
          <p>{this.props.question}</p>
          <p>count: {this.props.count}</p>
        </div>
        {this.toggle
          ? <div>
            <p>{this.props.answer}</p>
          </div>
          : null}
      </div>
    )
  }
}


export default QuestionAndAnswer