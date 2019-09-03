import React from "react";
import {
  Container,
  Header,
  Divider,
  Segment,
  Grid,
  Responsive
} from "semantic-ui-react";

const SuccessStories2 = () => {
  return (
    <div>
      <Responsive {...Responsive.onlyMobile}>
        <Segment style={{ padding: "2em 0em" }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: "1.5em" }}>
              We all have a “before mindset” and “after mindset” version of
              ourselves.
            </Header>
            <p style={{ fontSize: "1em" }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing
              massive amounts of whitespace and generic content that can seem
              massive, monolithic and worth your attention.
            </p>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "2em 0em" }}
            >
              Meet Alegra, one of our students.
            </Divider>
            <Grid centered columns={1}>
              <Grid.Column>
                <iframe
                  title="student"
                  width="100%"
                  height="200vh"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1"
                />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Segment style={{ padding: "2em 0em" }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We all have a “before mindset” and “after mindset” version of
              ourselves.
            </Header>
            <p style={{ fontSize: "1.2em" }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing
              massive amounts of whitespace and generic content that can seem
              massive, monolithic and worth your attention.
            </p>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em" }}
            >
              Meet Alegra, one of our students.
            </Divider>
            <Grid centered columns={1}>
              <Grid.Column>
                <iframe
                  title="student"
                  width="100%"
                  height="400vh"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
                />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Segment style={{ padding: "2em 0em" }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We all have a “before mindset” and “after mindset” version of
              ourselves.
            </Header>
            <p style={{ fontSize: "1.2em" }}>
              Instead of focusing on content creation and hard work, we have
              learned how to master the art of doing nothing by providing
              massive amounts of whitespace and generic content that can seem
              massive, monolithic and worth your attention.
            </p>
            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: "3em 0em" }}
            >
              Meet Alegra, one of our students.
            </Divider>
            <Grid centered columns={1}>
              <Grid.Column>
                <iframe
                  title="student"
                  width="100%"
                  height="400vh"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
                />
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
    </div>
  );
};

export default SuccessStories2;
