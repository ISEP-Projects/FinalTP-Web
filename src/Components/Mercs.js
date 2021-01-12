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
import { WEAPONS } from "../TestData/weapons";
import {MercCard} from "./MercCard"



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
  const initialFormData = Object.freeze({
    nickname: "",
    legalAge: "",
    idWeapon: 1,
    eddies: 0,
  });
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState(initialFormData)

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
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //... submit to API
  };
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

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a merc</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                name="nickname"
                placeholder="Nick Name"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                name="legalAge"
                placeholder="Age"
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" value="submit" color="primary">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Mercs;
