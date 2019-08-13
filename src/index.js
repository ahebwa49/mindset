import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Activities from "./Activities";
import NotFound from "./NotFound";

import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <ul>
      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/services">
          Services
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/activities">
          Activities
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/testimonials">
          Testimonials
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/activities" component={Activities} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
