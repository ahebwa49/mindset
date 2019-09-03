import React from "react";
import { Grid, Container, List, Header, Segment } from "semantic-ui-react";
const Footer = () => {
  return (
    <Segment
      inverted
      vertical
      style={{ padding: "1em 0em" }}
      color="blue"
      className="footer"
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="Address" />
              <List link inverted>
                <List.Item as="a">The Innovation Village</List.Item>
                <List.Item as="a">Plot 31 Ntinda - Kisaasi Road</List.Item>
                <List.Item as="a">
                  Ntinda Shopping Complex, Block B&C{" "}
                </List.Item>
                <List.Item as="a">Kampala, Uganda</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="Contact" />
              <List link inverted>
                <List.Item as="a">Phone: +256704679017</List.Item>
                <List.Item as="a">Email: info@mindset-group.org</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Footer;
