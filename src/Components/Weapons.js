import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { WEAPONS } from "../TestData/weapons";
import {GunCard} from "./GunCard"

const Weapons = () => {
  const weapons = WEAPONS;
  const weapon =
    weapons.length === 0 ? (
      <div></div>
    ) : (
      weapons.map((gun, index) => (
          <GunCard gun={gun} key={index}/>
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
