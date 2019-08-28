import React from "react";
import { Button, Container, Header, Divider, Segment } from "semantic-ui-react";

const SuccessStories3 = () => {
  return (
    <Segment style={{ padding: "3em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          We make mindblowing student courses.
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em" }}
        >
          Meet Masicha, one of our parents
        </Divider>
        <iframe
          title="student"
          width="75%"
          height="100%"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
        />
      </Container>
    </Segment>
  );
};

export default SuccessStories3;
