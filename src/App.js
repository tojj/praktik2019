import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import StartPage from './components/StartPage/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

const App = props => (
  <Router>
    <header>
      <Header />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={StartPage} />
      </Switch>
    </main>
    <footer><Footer/></footer>
  </Router>
)
export default App
