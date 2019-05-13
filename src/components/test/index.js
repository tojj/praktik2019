import React from 'react'
import REST from '../../REST'

class Event extends REST {}

class Test extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      party: ''
    }
    this.renderData()
    this.renderData = this.renderData.bind(this)
  }
  async renderData(){
    const party = await Event.find('5cd175cafb2eb85975f38b03')
    this.setState({party: party})
    
  }
  render() {
    const party = this.state.party
    let date = new Date(party.date).toLocaleDateString("sv-SE", {
      weekday: "short",
      day: "numeric",
      month: "long",
      hour: 'numeric',
      minute: 'numeric'
    })
    date = date.split(' ')
    console.log(date);
    
     
    return (
      <div style={{padding: '30px 0 0', width: '100%', minHeight: '80vh', background: party.image }}>
        <div style={{padding: '30px 50px 50px', textAlign: 'center', background: '#fff', width: '600px', margin: '0 auto 10px', boxShadow: '0 0 5px 0px rgba(0,0,0,0.4)' }}>
          {/* <div style={{width: '600px', height: '50px'}}>
            <h1 style={{fontSize: '36px', color: '#4763b7', fontWeight: '800', fontFamily: 'Arial Black'}}>Tojj</h1>
          </div> */}
          <img src="http://i.imgur.com/0aOsg8B.png" style={{width: '80%', height: 'auto'}} />
          <h2 style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{date[0]} {date[1]} {date[2]}</h2>
          <h3 style={{fontWeight: 'bold', marginBottom: '20px', textTransform: 'uppercase'}}>Kl {date[3]} {date[4]}</h3>
          <h5 style={{fontWeight: 'bold', marginBottom: '50px'}}> {party.child} ska ha kalas och du är bjuden! Klicka på länken nedan för att svara på om du kommer.</h5>
          <a href={"tojj.se/kalas/" + party.link} style={{textDecoration: 'none', background: '#4762b7', color: '#fff', padding: '10px 20px', borderRadius: '100px', opacity: 0.8, margin: '20px 0'}}>TILL KALASET</a>
        </div>
        <div style={{padding: '20px 50px', background: '#fff', width: '600px', margin: '0 auto', boxShadow: '0 0 5px 0px rgba(0,0,0,0.4)' }}>
          <h5 style={{fontWeight: 'bold'}}>Vad är Tojj?</h5>
          <p style={{fontSize: '.8rem'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
          <a href="tojj.se" style={{fontSize: '.8rem'}}>Läs mer ></a>
        </div>
      </div>
    )
  
  }
}

export default Test