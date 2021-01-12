import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Accordion,
  Button
} from "react-bootstrap";
import { JOBS } from "../TestData/jobs";
import { JobCard } from "./JobCard";
import { AddNewJob } from "./AddNewJob";

const Jobs = () => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const existedJobs = JOBS;
  const jobs =
    existedJobs.length === 0 ? (
      <div></div>
    ) : (
      existedJobs.map((job, index) => (
        <Accordion defaultActiveKey="0">
          <JobCard job={job} />
        </Accordion>
      ))
    );
  return (
    <>
    <Container>
      <Row>
        <Col>
          <h1>Jobs</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">{jobs}</Row>
      <Row className="justify-content-md-center">
        <Button variant="dark" style={{float:"right", width:"50rem"}} onClick={handleShow}>
         Add a new job
        </Button>
      </Row>
      
    </Container>
    <AddNewJob  show={show} handleClose={handleClose}/>
    </>
  );
};

export default Jobs;
