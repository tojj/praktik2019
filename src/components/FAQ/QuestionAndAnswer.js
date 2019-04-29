import React from 'react'

class QuestionAndAnswer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false
    }
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div>
        <h2>FAQ</h2>
      </div>
    )
  }
}


export default QuestionAndAnswer