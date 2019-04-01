import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StartPage from "./components/StartPage/index";
import Header from "./components/Header/index";
import ProductInfo from "./components/StartPage/ProductInfo/index";

const App = props => (
  <Router>
    <header>
      <Header />
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={StartPage} />
      </Switch>
      <ProductInfo />
    </main>
    <footer>footer</footer>
  </Router>
);
export default App;
