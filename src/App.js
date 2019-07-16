import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import Header from './components/Header/index'
import StartPage from './components/StartPage/index'
import PreviewPage from './components/PreviewPage/index'
import CreatePartyPage from './components/CreatePartyPage/index'
import PartyPage from './components/PartyPage/index'
import AdminPage from './components/AdminPage/index'
import Faq from "./components/FAQ/index"
import Footer from './components/Footer/index'
import MissingPage from "./components/MissingPage/index"
import PasswordInput from "./components/PasswordInput/index"
import ContractPage from "./components/ContractPage/index"
import ThanksPage from "./components/ThanksPage"

const App = props => {
  return (
    <Router>

      <Switch>
        <Route
          exact
          path="/"
          render={(...routeProps) => (
            <header className="header-startpage">
              <Header {...routeProps} startPage={true} />
            </header>
          )}
        />
        <Route
          path="/"
          render={(...routeProps) => (
            <header>
              <Header {...routeProps} startPage={false} />
            </header>
          )}
        />
      </Switch>
      <main id="main">
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/skapa-kalas" component={CreatePartyPage} />
          <Route exact path="/kalas/:link" component={PartyPage} />
          <Route exact path="/kalas-förhandsvisning" component={PreviewPage} />
          <Route exact path="/bekraftelse/:link" component={PasswordInput} />
          <Route exact path="/vanliga-fragor" component={Faq} />
          <Route exact path="/vanliga-fragor/:link" component={Faq} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/avtal" component={ContractPage} />
          <Route exact path="/tack-for-visat-intresse" component={ThanksPage} />
          <Route component={MissingPage} />
        </Switch>
      </main>
      <footer><Footer /></footer>
    </Router>
  )
}

export default App;