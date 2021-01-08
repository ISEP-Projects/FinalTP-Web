import React, { useState } from 'react';
import {
  Card,
  Image,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form
} from 'react-bootstrap';
import { MERCS } from '../TestData/mercs';
import { WEAPONS } from "../TestData/weapons";

const IsAlive = ({ isAlive }) => {
  if (!isAlive) {
    return <Image src="/Img/poison.svg" height="15" width="30" />;
  } else return <Image src="/Img/heart.svg" height="15" width="30" />;
};
const ReturnIterm = ({ merc, weapons }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Header  bg={merc.isAlive === 1 ? "light" : "secondary"}>
          {merc.nickname}
          <IsAlive isAlive={merc.isAlive} />
        </Card.Header>
        <Card.Body >
          <Card.Subtitle className="mb-2">
            {merc.legalAge}
          </Card.Subtitle>
          <Card.Text style={{textAlign: "left"}}>
            <Image src="/Img/gun.svg" height="15" width="30" />
           { weapons.filter(weapon => weapon.id === merc.idWeapon).map(weapon => (weapon.name))}
          </Card.Text>
          <Card.Text style={{textAlign: "left"}}>
            <Image src="/Img/dollar.svg" height="15" width="30" />
            {merc.eddies}
          </Card.Text>
          <Card.Link  href="#">Delete</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

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
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const weapons = WEAPONS;
  const existedMercs = MERCS;
  const merc =
    existedMercs.length === 0 ? (
      <div></div>
    ) : (
      existedMercs.map((merc, index) => (
        <div key={index}>
          <ReturnIterm merc={merc} weapons={weapons}/>
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
