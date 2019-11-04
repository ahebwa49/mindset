import React from "react";
import { Card, Image, Header, Responsive, Segment } from "semantic-ui-react";
const Cards = () => {
  return (
    <>
      <Responsive {...Responsive.onlyMobile}>
        <Segment
          style={{ padding: "1rem 0.5rem", backgroundColor: "#EAEEEE", color: "#164C60" }}
          vertical
        >
          <Card.Group stackable>
            <Card fluid>
              {/** */}
              <Image src="/static/technology.jpeg" wrapped ui={false} />
              <Card.Content>
                <Header textAlign="center" style={{ color: "#4BBBB5" }}>
                  Technology
                </Header>

                <p style={{ textAlign: "left", color: "#164C60" }}>
                  Our first step is giving kids the tech skills required to be
                  up to date in a fast changing world
                </p>
              </Card.Content>
            </Card>
            <Card fluid>
              <Image src="/static/innovation.jpg" wrapped ui={false} />
              <Card.Content>
                <Header textAlign="center" style={{ color: "#4BBBB5" }}>
                  Innovation
                </Header>

                <p style={{ textAlign: "left", color: "#164C60" }}>
                  We instill in our students the ability to harness their skills
                  and use them to solve societal problems
                </p>
              </Card.Content>
            </Card>
            <Card fluid>
              <Image src="/static/entreprenuership.jpg" wrapped ui={false} />
              <Card.Content>
                <Header textAlign="center" style={{ color: "#4BBBB5" }}>
                  Entrepreneurship
                </Header>

                <p style={{ textAlign: "left", color: "#164C60" }}>
                  Have an entrepreneurial skill-set and mindset that will enable
                  them launch their innovation into profitable business
                </p>
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyTablet}>
        <Segment
          style={{
            padding: "1em",
            backgroundColor: "#EAEEEE",
            color: "#164C60"
          }}
          vertical
        >
          <Card.Group stackable centered>
            <Card>
              {/** */}
              <Image src="/static/technology.jpeg" wrapped ui={false} />
              <Card.Content>
                <Header textAlign="center" style={{ color: "#4BBBB5" }}>
                  Technology
                </Header>

                <p style={{ textAlign: "left", color: "#164C60" }}>
                  Our first step is giving kids the tech skills required to be
                  up to date in a fast changing world
                </p>
              </Card.Content>
            </Card>
            <Card>
              <Image src="/static/innovation.jpg" wrapped ui={false} />
              <Card.Content>
                <Header textAlign="center" style={{ color: "#4BBBB5" }}>
                  Innovation
                </Header>

                <p style={{ textAlign: "left", color: "#164C60" }}>
                  We instill in our students the ability to harness their skills
                  and use them to solve societal problems
                </p>
              </Card.Content>
            </Card>
            <Card>
              <Image src="/static/entreprenuership.jpg" wrapped ui={false} />
              <Card.Content>
                <Header textAlign="center" style={{ color: "#4BBBB5" }}>
                  Entrepreneurship
                </Header>

                <p style={{ textAlign: "left", color: "#164C60" }}>
                  Have an entrepreneurial skill-set and mindset that will enable
                  them launch their innovation into profitable business
                </p>
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
      </Responsive>
      <Responsive {...Responsive.onlyComputer}>
        <Segment
          style={{
            padding: "1em",
            backgroundColor: "#EAEEEE",
            color: "#164C60"
          }}
          vertical
        >
          <Card.Group stackable centered>
            <Card>
              {/** */}
              <Image src="/static/technology.jpeg" wrapped ui={false} />
              <Card.Content>
                <Header textAlign="center" style={{ color: "#4BBBB5" }}>
                  Technology
                </Header>

                <p style={{ textAlign: "left", color: "#164C60" }}>
                  Our first step is giving kids the tech skills required to be
                  up to date in a fast changing world
                </p>
              </Card.Content>
            </Card>
            <Card>
              <Image src="/static/innovation.jpg" wrapped ui={false} />
              <Card.Content>
                <Header textAlign="center" style={{ color: "#4BBBB5" }}>
                  Innovation
                </Header>

                <p style={{ textAlign: "left", color: "#164C60" }}>
                  We instill in our students the ability to harness their skills
                  and use them to solve societal problems
                </p>
              </Card.Content>
            </Card>
            <Card>
              <Image src="/static/entreprenuership.jpg" wrapped ui={false} />
              <Card.Content>
                <Header textAlign="center" style={{ color: "#4BBBB5" }}>
                  Entrepreneurship
                </Header>

                <p style={{ textAlign: "left", color: "#164C60" }}>
                  Have an entrepreneurial skill-set and mindset that will enable
                  them launch their innovation into profitable business
                </p>
              </Card.Content>
            </Card>
          </Card.Group>
        </Segment>
      </Responsive>
    </>
  );
};
export default Cards;
