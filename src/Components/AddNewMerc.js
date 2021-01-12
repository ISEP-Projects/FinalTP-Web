import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const AddNewMerc = ({ show, handleClose }) => {
  const initialFormData = Object.freeze({
    nickname: "",
    legalAge: "",
    idWeapon: 1,
    eddies: 0,
  });
  const [formData, setFormData] = useState(initialFormData);
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
  );
};
