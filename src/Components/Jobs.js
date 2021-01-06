import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form
} from 'react-bootstrap';
import { JOBS } from '../TestData/jobs';

const ReturnIterm = ({ jobs }) => {
  return (
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{jobs.id}</Card.Title>
          <Card.Text>{jobs.fixer}</Card.Text>
          <Card.Text>{jobs.title}</Card.Text>
          <Card.Text>{jobs.description}</Card.Text>
          <Card.Text>{jobs.henchmenCount}</Card.Text>
          <Card.Text>{jobs.reward}</Card.Text>
          <Card.Text>{jobs.isAvailable}</Card.Text>
          <Card.Link href="#">Choose</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

const Jobs = () => {
  const existedJobs = JOBS;
  const jobs =
    existedJobs.length === 0 ? (
      <div></div>
    ) : (
      existedJobs.map((job, index) => (
        <div key={index}>
          <ReturnIterm job={job} />
        </div>
      ))
    );
  return (
    // <div className="App">
    <header className="App-header">
      <Container>
        <Container>
          <Row>
            <Col>
              <h1>Jobs</h1>
            </Col>
          </Row>
          <Row>{jobs}</Row>
        </Container>
      </Container>
    </header>
    // </div>
  );
};

export default Jobs;
