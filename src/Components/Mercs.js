import React, { useState } from "react";
import {
  Card,
  Image,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import { MERCS } from "../TestData/mercs";

const IsAlive = ({ isAlive }) => {
  if (!isAlive) {
    return <Image src="/Img/poison.svg" height="15" width="30" />;
  } else return <Image src="/Img/heart.svg" height="15" width="30" />;
};
const ReturnIterm = ({ merc }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            {merc.nickname}
            <IsAlive isAlive={merc.isAlive} />
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {merc.legalAge}
          </Card.Subtitle>
          <Card.Text>
            <Image src="/Img/gun.svg" height="15" width="30" />
            {merc.idWeapon}
          </Card.Text>
          <Card.Text>
            <Image src="/Img/dollar.svg" height="15" width="30" />
            {merc.eddies}
          </Card.Text>
          <Card.Link href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

const AddIterm = ({ handleShow }) => {
  return (
    <Col>
      <Card style={{ width: "18rem", height: "12.57rem" }}>
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
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const existedMercs = MERCS;
  const merc =
    existedMercs.length === 0 ? (
      <div></div>
    ) : (
      existedMercs.map((merc, index) => (
        <div key={index}>
          <ReturnIterm merc={merc} />
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
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a merc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control type="name" placeholder="Nick Name" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="age" placeholder="Age" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Mercs;
