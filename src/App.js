import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Header from './components/Header/index'
import StartPage from './components/StartPage/index'
import PreviewPage from './components/PreviewPage/index'
import CreatePartyPage from './components/CreatePartyPage/index'
import PartyPage from './components/PartyPage/index'
import Footer from './components/Footer/index'

const App = (props) => {

  return (
    <Router>
      <header>
        <Switch>
          <Route exact path="/" render={(...routeProps) => (<Header {...routeProps} startPage={true} />)} />
          <Route path="/" render={(...routeProps) => (<Header {...routeProps} startPage={false} />)} />
        </Switch>
      </header>
      <main id="main">
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/skapa-kalas" component={CreatePartyPage} />
          <Route exact path="/kalas/:link" component={PartyPage} />          
          <Route exact path="/kalas-förhandsvisning" component={PreviewPage} />
        </Switch>
      </main>
      <footer><Footer /></footer>
    </Router>
  )
}

export default App;