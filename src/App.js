import React from 'react';
import './App.css';
//import * as ReactBootStrap from "react-bootstrap";
import DankMemes from "./Components/DankMemes";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";
import MoreDeets from "./Components/MoreDeets";
import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route //, Link
} from "react-router-dom";
import Home from './Components/Home'
import About from './Components/About'
import PersonList from './Components/PersonList'
import GravureList from './Components/GravureList'

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/features" component={Features}>
              <Features />
          </Route>
          <Route path="/pricing" component={Pricing}>
            <Pricing />
          </Route>
          <Route path="/deets" component={MoreDeets}>
            <MoreDeets />
          </Route>
          <Route path="/dankmemes" component={DankMemes}>
            <DankMemes />
          </Route>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/home">
              <Home />
          </Route>
          <Route path="/about-us">
              <About />
          </Route>
          <Route path="/contact-us">
              <Home />
          </Route>
          <Route path="/person">
              <PersonList />
          </Route>
          <Route path="/gravure">
              <GravureList />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
