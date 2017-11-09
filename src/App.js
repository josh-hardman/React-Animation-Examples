import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
  Link
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import CssAnimation from "./components/CssAnimation";
import Gsap from "./components/Gsap";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Css Animation</Link>
            </li>
            <li>
              <Link to="/gsap">GSAP with transition group</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={CssAnimation} />
            <Route path="/gsap" exact component={Gsap} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
