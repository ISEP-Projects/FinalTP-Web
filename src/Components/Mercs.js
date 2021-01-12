import React, { useState } from "react";
import {
  Card,
  Image,
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { MERCS } from "../TestData/mercs";
import { WEAPONS } from "../TestData/weapons";
import {MercCard} from "./MercCard"
import {AddNewMerc} from "./AddNewMerc"

const AddIterm = ({ handleShow }) => {
  return (
    <Col>
      <Card style={{ width: "18rem", height: "13.4rem" }}>
        <Card.Body>
          <Button variant="link" onClick={handleShow}>
            <Image src="/Img/plus.svg" height="160" width="40" />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Mercs = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const handleDelete = () => {}
  const weapons = WEAPONS;
  const existedMercs = MERCS;
  const merc =
    existedMercs.length === 0 ? (
      <div></div>
    ) : (
      existedMercs.map((merc, index) => (
        <div key={index}>
          <MercCard merc={merc} weapons={weapons} handleDelete={handleDelete} />
        </div>
      ))
    );
  
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Mercs</h1>
          </Col>
        </Row>
        <Row>
          {merc}
          <AddIterm handleShow={handleShow} />
        </Row>
      </Container>

      <AddNewMerc show={show} handleClose={handleClose} />
    </>
  );
};

export default Mercs;
