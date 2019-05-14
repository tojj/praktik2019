import React from 'react'

class Test extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      test: ''
    }
    this.test()
    this.test = this.test.bind(this)
  }
  async test(){
    const test = 'test'
    console.log(test)
    
  }
  render() { 
    return (
      <div>
        test
      </div>
    )
  }
}

export default Test