import React from 'react'
import REST from '../../REST'

class Event extends REST { }

class PartyPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: null,
      background: "#4762b7"
    }
  }
  componentDidMount() {
    const eventLink = this.props.match.params.link    
    this.findEventAndMatchWithDB(eventLink)
      .then(data => {
        this.setState({
          event: data,
          background: "url(" + data.image + ")"
        })
        
      })
  }

  async findEventAndMatchWithDB(eventLink) {
    const events = await Event.find()
    if (events[0].link === eventLink){
      return events[0]
    } else {
      return null
    }
  }

  render() {
    let content = ''
    console.log(this.state.event);
    
    // let imgsrc = "url(" + this.state.event.image + ")"
    console.log(this.state.event);
    
    if (this.state.event === null) {
      content = ''
    } else {
      content = <div style={{padding: "10px", background: this.state.background}}>
      <div style={{backgroundColor: "white"}}>
        <p>{this.state.event.title}</p>
        <p>{this.state.event.age}</p>
        <p>{this.state.event.child}</p>
        <p>{this.state.event.swish.amount}</p>
      </div>
      </div>
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}


export default PartyPage