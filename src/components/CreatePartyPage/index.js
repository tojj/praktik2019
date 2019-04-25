import React from 'react'
import { connect } from 'react-redux'
import FormContainer from './Form/index'
import REST from '../../REST'
import Buttons from './Buttons/index'

class Event extends REST {}

class CreatePartyPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      eventLink: ''
    }
    this.createEvent = this.createEvent.bind(this)
  }

  async createEvent() {
    const link = await this.generateLink()
    const newEvent = new Event({
      title: this.props.birthdayEvent.title,
      child: this.props.birthdayEvent.name,
      age: this.props.birthdayEvent.age,
      image: "url('" + this.props.birthdayImage + "')",
      desc: "Jag fyller år och jag vill bjuda alla på min superroliga fest som kommer att hållas på mitt favoritställe i hela världen. Ta med saft och bullar för jag bjuder inte på någonting!",
      date: 1568894400000,
      rsvp: 1566172800000,
      location: {
        street: "Jägersrovägen 179",
        zipcode: 21375,
        city: "Malmö"
      },
      swish: {
        number: "0709629276",
        amount: 150,
        image: "http://betalamedswish.se/API/Get/?n=0709629276&a=150&m=PON28d4W&la=true&lm=true&s=500",
        color: "#4762b7"
      },
      donate: false,
      attending: [],
      product: "5cb453e226d34fc2bfc5af07",
      link: link
    })
    await newEvent.save()
    console.log(newEvent);
    
    
  }
  /**
   * Link will be equal to the first 2 letters of the 
   * birthday child's name, uppercased. Followed by the age 
   * they will turn and 3 random symbols.
   */
  generateLink = () => {
    let link = []
    const name = 'Pontus' // = redux.state...child
    link.push(name.slice(0, 2).toUpperCase())
    console.log(link)
    link.push('' + 28)// 28 = redux.state...age
    console.log(link)
    
    let saltArray = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
    saltArray = saltArray.split("")
    let salt = ''
    for (let i = 0; i < 3; i++) {
      let letter = saltArray[Math.floor(Math.random() * saltArray.length)]
      salt = salt + letter
    }
    link.push(salt)
    link = link.join('')
    console.log(link);
    this.setState({eventLink: link})
    return link
  }
  render() {
    return (
      <div className="createpartypage-wrapper">
        <FormContainer />
        <Buttons eventLink={'/kalas/' + this.state.eventLink} createEvent={this.createEvent} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    birthdayEvent: state.birthday.birthdayEvent,
    birthdayImage: state.birthday.birthdayImage
  }
}

export default connect(mapStateToProps)(CreatePartyPage)