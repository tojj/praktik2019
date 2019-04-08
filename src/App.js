import React from "react"
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from './components/Header/index'
import StartPage from './components/StartPage/index'
import CreatePartyPage from './components/CreatePartyPage/index'
import Footer from './components/Footer/index'

const App = (props) => {
  return (
    <Router>
      <header>
        <Switch>
          <Route exact path="/" render={(...routeProps)=> (<Header {...routeProps} startPage={true} />)} />
          <Route path="/" render={(...routeProps)=> (<Header {...routeProps} startPage={false} />)} />
        </Switch>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/skapa-kalas" component={CreatePartyPage} />
        </Switch>
      </main>
      <footer><Footer /> 
      </footer>
    </Router>
  )

}

const mapStateToProps = state => ({
  birthdayDate: state.birthday.birthdayDate
})

const mapDispatchToProps = dispatch => ({
  updateBday: (data) => dispatch(updateBirthday(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
