import React, { Component } from "react";
import AdminPanel from "./AdminPanel";
import CarouselComponent from "./CarouselComponent";
import StudentStory from "./StudentStory";
import ParentStory from "./ParentStory";
import Footer from "./Footer";
import Heading1 from "./Heading1";
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
    const entDescription =
      "Have an entrepreneurial skill-set and mindset that will enable them launch their innovation into profitable business";
    const techDescription =
      "Our first step is giving kids the tech skills required to be up to date in a fast changing world";
    const innovationDescription =
      "We instill in our students the ability to harness their skills and use them to solve societal problems";
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
        <br />
        <Heading1 />
        <br />
        <Card.Group centered>
          <Card>
            <Card.Content header="Technology" textAlign="center" />
            <Image src="/static/technology.jpg" wrapped ui={false} />
            <Card.Content description={techDescription} />
          </Card>
          <Card>
            <Card.Content header="Innovation" textAlign="center" />
            <Image src="/static/innovation.jpg" wrapped ui={false} />
            <Card.Content description={innovationDescription} />
          </Card>
          <Card>
            <Card.Content header="Entreprenuership" textAlign="center" />
            <Image src="/static/entreprenuership.jpg" wrapped ui={false} />
            <Card.Content description={entDescription} />
          </Card>
        </Card.Group>
        <br />
        <Header
          as="h3"
          style={{ fontSize: "2em", fontFamily: "dosis" }}
          textAlign="center"
        >
          SUCCESS STORIES
        </Header>
        <StudentStory />
        <ParentStory />
        <Footer />
      </div>
    );
  }
}

export default App;
