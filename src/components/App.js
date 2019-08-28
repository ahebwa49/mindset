import React, { Component } from "react";
import AdminPanel from "./AdminPanel";
import CarouselComponent from "./CarouselComponent";
import SuccessStories2 from "./SuccessStories2";
import SuccessStories3 from "./SuccessStories3";
import Footer from "./Footer";
import { Button, Card, Header, Image } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { role_id: "" };
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
        this.setState({
          role_id: data.role_id
        });
      })
      .catch(error => {
        console.log(`Failed to fetch profile data ${error}`);
      });
  }
  render() {
    const description =
      "Scratch is a block-based visual programming language and online community targeted primarily at children. Users of the site can create online projects using a block-like interface.";

    return (
      <div>
        {this.state.role_id === "SUPERADMIN" ? (
          <AdminPanel />
        ) : this.state.role_id === "ADMIN" ? (
          <AdminPanel />
        ) : (
          ""
        )}
        <CarouselComponent />
        <br />
        <Header
          as="h2"
          style={{ fontSize: "2.5em", transform: "skewX(-12deg)" }}
          textAlign="center"
        >
          MIND-BLOWING COURSES THAT CHANGE CHILDREN'S LIVES!
        </Header>
        <br />
        <Card.Group centered>
          <Card>
            <Card.Content header="Scratch" textAlign="center" />
            <Image src="/static/scratch.png" wrapped ui={false} />
            <Card.Content description={description} />
            <Button primary>view course</Button>
          </Card>
          <Card>
            <Card.Content header="Progate" textAlign="center" />
            <Image src="/static/scratch.png" wrapped ui={false} />
            <Card.Content description={description} />
            <Button primary>view course</Button>
          </Card>
          <Card>
            <Card.Content header="Mind Sweeper" textAlign="center" />
            <Image src="/static/scratch.png" wrapped ui={false} />
            <Card.Content description={description} />
            <Button primary>view course</Button>
          </Card>
        </Card.Group>
        <br />
        <Header as="h3" style={{ fontSize: "2em" }} textAlign="center">
          SUCCESS STORIES
        </Header>
        <SuccessStories2 />
        <SuccessStories3 />
        <Footer />
      </div>
    );
  }
}

export default App;
