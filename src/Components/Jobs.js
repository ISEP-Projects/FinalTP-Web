import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Accordion
} from 'react-bootstrap';
import { JOBS } from '../TestData/jobs';
import {JobCard} from './JobCard'


const Jobs = () => {
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
        <Container>
          <Row>
            <Col>
              <h1>Jobs</h1>
            </Col>
          </Row>
          <Row>{jobs}</Row>
        </Container>
  );
};

export default Jobs;
