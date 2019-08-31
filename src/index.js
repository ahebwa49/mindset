import React, { Component } from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Success from "./components/Success";
import Students from "./components/Students";
import Student from "./components/Student";
import Messages from "./components/Messages";
import Admins from "./components/Admins";
import Message from "./components/Message";
import EditStudent from "./components/EditStudent";
import NavMenu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import * as serviceWorker from "./serviceWorker";
import Admin from "./components/Admin";
import { Sidebar, Icon, Menu } from "semantic-ui-react";

class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      username: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/profile", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ username: data.username || data.email });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }
  handleShowClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleSidebarHide = () => this.setState({ visible: false });
  render() {
    const { visible } = this.state;
    return (
      <Router>
        <NavMenu
          username={this.state.username}
          visible={visible}
          handleShowClick={this.handleShowClick}
        />
        <div>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              icon="labeled"
              direction="right"
              inverted
              animation="push"
              onHide={this.handleSidebarHide}
              vertical
              visible={visible}
              width="thin"
              onClick={this.handleSidebarHide}
            >
              <Menu.Item as={Link} to="/">
                <Icon name="home" />
                Home
              </Menu.Item>
              <Menu.Item as={Link} to="/about">
                About
              </Menu.Item>
              <Menu.Item as={Link} to="/services">
                Services
              </Menu.Item>
              <Menu.Item as={Link} to="/contact">
                Contact
              </Menu.Item>
              {this.state.username ? (
                <div>
                  <Menu.Item as="a">{this.state.username}</Menu.Item>
                  <Menu.Item as="a" href="http://localhost:4000/logout">
                    logout
                  </Menu.Item>
                </div>
              ) : (
                <div>
                  <Menu.Item as={Link} to="/login">
                    Sign in
                  </Menu.Item>
                  <Menu.Item as={Link} to="/register">
                    Register
                  </Menu.Item>
                </div>
              )}
            </Sidebar>

            <Sidebar.Pusher>
              <Switch>
                <Route
                  exact
                  path="/students/student/:studentId"
                  component={Student}
                />
                <Route
                  exact
                  path="/messages/message/:messageId"
                  component={Message}
                />
                <Route path="/admins/admin/:adminId" component={Admin} />
                <Route
                  path="/students/edit/:studentId"
                  component={EditStudent}
                />
                <Route exact path="/messages" component={Messages} />
                <Route path="/menu" component={NavMenu} />
                <Route path="/admins" component={Admins} />
                <Route path="/students" component={Students} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/success" component={Success} />
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/testimonials" component={Testimonials} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
              </Switch>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Routing />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
