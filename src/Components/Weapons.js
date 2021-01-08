import React from "react";
import { Card, Container, Row, Col, Media, Image, Button } from "react-bootstrap";
import { WEAPONS } from "../TestData/weapons";

const ReturnIterm = ({ gun }) => {
  return (
    <Media style={{textAlign: "left"}}>
      <Image
        width={100}
        height={100}
        className="mr-3"
        src="/Img/gun_1.jpg"
        alt={gun.name}
      />
      <Media.Body>
        <h5>{gun.name}</h5>
        <p>
          Damage: {gun.damage} | Accuracy: {gun.accuracy} | Firerate: {gun.firerate} | Price: {gun.price}
        </p>
        <p>{gun.description}</p>
        <Button variant="light">Buy</Button>
      </Media.Body>
    </Media>
  );
};

const Weapons = () => {
  const weapons = WEAPONS;
  const weapon =
    weapons.length === 0 ? (
      <div></div>
    ) : (
      weapons.map((gun, index) => (
        <Card key={index} bg={"dark" } text={"light"} style={{ width: "60rem", height: "10rem" }}>
          <ReturnIterm gun={gun} />
        </Card>
      ))
    );
  return (
    <Container>
      <Row>
        <Col>
          <h1>Weapons</h1>
        </Col>
      </Row>
      <Row>{weapon}</Row>
    </Container>
  );
};

export default Weapons;
