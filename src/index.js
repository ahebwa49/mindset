import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
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
import Subscription from "./components/Subscription";
import EditStudent from "./components/EditStudent";
import NavMenu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import MobileMenu from "./components/MobileMenu";
import * as serviceWorker from "./serviceWorker";
import Admin from "./components/Admin";
import SlideAnimation from "./components/SlideAnimation";
import { Sidebar, Menu } from "semantic-ui-react";

export default class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  handleShowClick = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleSidebarHide = () => this.setState({ visible: false });
  render() {
    const { visible } = this.state;
    return (
      <Router>
        <>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              icon="labeled"
              direction="right"
              inverted
              animation="push"
              /*onHide={this.handleSidebarHide}*/
              vertical
              visible={visible}
              width="wide"
              onClick={this.handleSidebarHide}
              className="mobileSideBar"
            >
              <MobileMenu handleSidebarHide={this.handleSidebarHide} />
            </Sidebar>

            <Sidebar.Pusher>
              <NavMenu handleShowClick={this.handleShowClick} />
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
                <Route
                  exact
                  path="/subscriptions/subscription/:subscriptionId"
                  component={Subscription}
                />
                <Route path="/admins/admin/:adminId" component={Admin} />
                <Route
                  path="/students/edit/:studentId"
                  component={EditStudent}
                />
                <Route exact path="/messages" component={Messages} />
                <Route exact path="/slide" component={SlideAnimation} />
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
        </>
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store()}>
    <Routing />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
