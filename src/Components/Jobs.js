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

const ReturnIterm = ({ job }) => {
  return (
    <Col>
      <Card style={{ width: '15rem', color: '#000' }}>
        <Card.Body>
          <Card.Title>id: {job.id}</Card.Title>
          <Card.Text>fixer: {job.fixer}</Card.Text>
          <Card.Text>title:{job.title}</Card.Text>
          <Card.Text>description: {job.description}</Card.Text>
          <Card.Text>henchmenCount: {job.henchmenCount}</Card.Text>
          <Card.Text>reward:{job.reward}</Card.Text>
          <Card.Text>state:{job.isAvailable}</Card.Text>
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