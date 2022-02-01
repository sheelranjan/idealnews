import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Navbar/>
          <Switch>
            <Route exact path="/"><News key="general" pageSize={20} country="in" category="&category=general"/></Route>
            <Route exact path="/business"><News key="business" pageSize={20} country="in" category="&category=business"/></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={20} country="in" category="&category=entertainment"/></Route>
            <Route exact path="/health"><News key="health" pageSize={20} country="in" category="&category=health"/></Route>
            <Route exact path="/science"><News key="science" pageSize={20} country="in" category="&category=science"/></Route>
            <Route exact path="/sports"><News key="sports" pageSize={20} country="in" category="&category=sports"/></Route>
            <Route exact path="/technology"><News key="technology" pageSize={20} country="in" category="&category=technology"/></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

