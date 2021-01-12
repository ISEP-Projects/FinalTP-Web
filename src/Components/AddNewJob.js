import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

export const AddNewJob = ({ show, handleClose }) => {
  const initialFormData = Object.freeze({
    fixer: "",
    title: "",
    description: "",
    henchmenCount: 0,
    reward: 0,
    isAvailable: 1
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
        <Modal.Title>Add a job</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Label>Fixer</Form.Label>
            <Form.Control
              name="fixer"
              placeholder="Fixer"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
          <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              placeholder="Title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
          <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
              name="description"
              placeholder="Tell me about this job"
              onChange={handleChange}
            />
          </Form.Group> <Form.Group>
          <Form.Label>Henchmen Count</Form.Label>
            <Form.Control
              name="henchmenCount"
              type="number"
              onChange={handleChange}
            />
            <Form.Label>Reward</Form.Label>
            <Form.Control
              name="reward"
              type="number"
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" value="submit" color="primary">
            Add
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};