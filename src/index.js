import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "./index.css";
import App from "./components/App";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Profile from "./components/Profile";
import Success from "./components/Success";
import Students from "./components/Students";
import Student from "./components/Student";
import Messages from "./components/Messages";

import * as serviceWorker from "./serviceWorker";

const Routing = () => {
  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "1fr 3fr",
      border: "1px solid green"
    },
    ul: {
      display: "flex",
      margin: "auto",
      padding: "auto",
      fontSize: "1.2rem",
      listStyleType: "none"
    },
    li: {
      margin: "0 15px 0 0",
      textDecoration: "none"
    },
    navlink: {
      textDecoration: "none"
    },
    ulDiv: {
      display: "flex",
      flexBasis: "3fr",
      border: "1px solid red",
      height: "10vh"
    },
    logo: {
      display: "flex",
      flexBasis: "1fr",
      alignSelf: "center",
      alignItems: "center",
      fontSize: "1.5rem",
      border: "1px solid blue",
      height: "10vh"
    }
  };
  return (
    <Router>
      <div style={styles.container}>
        <div style={styles.logo}>mindset coders</div>
        <div style={styles.ulDiv}>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <NavLink
                exact
                activeClassName="active"
                to="/"
                style={styles.navlink}
              >
                HOME
              </NavLink>
            </li>
            <li style={styles.li}>
              <NavLink
                activeClassName="active"
                to="/about"
                style={styles.navlink}
              >
                ABOUT
              </NavLink>
            </li>
            <li style={styles.li}>
              <NavLink
                activeClassName="active"
                to="/services"
                style={styles.navlink}
              >
                SERVICES
              </NavLink>
            </li>
            <li style={styles.li}>
              <NavLink
                activeClassName="active"
                to="/testimonials"
                style={styles.navlink}
              >
                TESTIMONIALS
              </NavLink>
            </li>
            <li style={styles.li}>
              <NavLink
                activeClassName="active"
                to="/contact"
                style={styles.navlink}
              >
                CONTACT
              </NavLink>
            </li>
            <li style={styles.li}>
              <NavLink
                activeClassName="active"
                to="/login"
                style={styles.navlink}
              >
                LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <div>
        <Switch>
          <Route path="/students/:studentId" component={Student} />
          <Route path="/messages" component={Messages} />
          <Route path="/students" component={Students} />
          <Route path="/success" component={Success} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
