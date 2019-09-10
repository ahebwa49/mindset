import React from "react";
import { Card, Image, Header } from "semantic-ui-react";
const Cards = () => {
  return (
    <Card.Group centered>
      <Card>
        {/** */}
        <Image src="/static/technology.jpg" wrapped ui={false} />
        <Card.Content>
          <Header textAlign="center" style={{ color: "#4BBBB5" }}>
            Technology
          </Header>

          <p style={{ textAlign: "left", color: "#164C60" }}>
            Our first step is giving kids the tech skills required to be up to
            date in a fast changing world
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
            We instill in our students the ability to harness their skills and
            use them to solve societal problems
          </p>
        </Card.Content>
      </Card>
      <Card>
        <Image src="/static/entreprenuership.jpg" wrapped ui={false} />
        <Card.Content>
          <Header textAlign="center" style={{ color: "#4BBBB5" }}>
            Entreprenuership
          </Header>

          <p style={{ textAlign: "left", color: "#164C60" }}>
            Have an entrepreneurial skill-set and mindset that will enable them
            launch their innovation into profitable business
          </p>
        </Card.Content>
      </Card>
    </Card.Group>
  );
};
export default Cards;
