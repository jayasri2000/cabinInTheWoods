import React from "react";
import Navbar from "../src/components/Navbar";
import Home from "../src/Screens/Home";
import About from "./Screens/About";
import Faq from "./Screens/Faq";
import Cabins from "./Screens/Cabins";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Bookings from "./Screens/Bookings";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/bookings">
            <Bookings />
          </Route>
          <Route path="/cabins">
            <Cabins />
          </Route>
          <Route exact path="faq">
            <Faq />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
