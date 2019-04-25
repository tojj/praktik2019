import React from 'react'
import { Link } from "react-router-dom"
import FormContainer from './Form/index'
import REST from '../../REST'

class Event extends REST {}

class CreatePartyPage extends React.Component {
  constructor(props){
    super(props)
    this.createEvent = this.createEvent.bind(this)
  }

  async createEvent() {
    const link = await this.generateLink()
    const newEvent = new Event({
      title: "Pontus födelsedagsfest på Toys'R'Us's parkering",
      child: "Pontus",
      age: 28,
      image: "/images/patterns/dock.jpg",
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
    const pon = 'Pontus'
    link.push(pon.slice(0, 2).toUpperCase())
    console.log(link)
    link.push('' + 28)
    console.log(link)
    
    let saltArray = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890'
    saltArray = saltArray.split("")
    let salt = ''
    for (let i = 0; i < 3; i++) {
      let letter = saltArray[Math.floor(Math.random() * saltArray.length)]
      salt = salt + letter
    }
    link.push(salt)
    link.join('')
    console.log(link);
    link = link[0] + link[1] + link[2]
    return link
  }
  render() {
    return (
      <div className="createpartypage-wrapper">
        <FormContainer />
        <div className="buttons-container">
          <Link
            to="/"
            className="link-cancel">
            Avbryt
          </Link>
          <Link
            to="/skapa-kalas"
            className="link-party-page"
            onClick={this.createEvent}>
            Godkänn
          </Link>
          <Link
            to="/kalas-förhandsvisning"
            className="link-party-page">
            Förhandsgranska
          </Link>
        </div>
      </div>
    )
  }
}

export default CreatePartyPage