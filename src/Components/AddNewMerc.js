import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../shared/baseUrl"

export const AddNewMerc = ({ show, handleClose }) => {
  const initialFormData = Object.freeze({
    nickname: "",
    legalAge: "",
  });
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmitNewMerc = (e) => {
    e.preventDefault();
    const nickname = formData.nickname;
    const legalAge = formData.legalAge;
    axios.post(`${baseUrl}merc/create/${nickname}/${legalAge}/`)
    handleClose()
  };
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add a merc</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmitNewMerc}>
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
