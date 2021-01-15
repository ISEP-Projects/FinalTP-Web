import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Accordion, Button } from "react-bootstrap";
import { JobCard } from "./JobCard";
import { AddNewJob } from "./AddNewJob";
import { Loading } from "./Loading";
import { useParams } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

const Jobs = () => {
  const [showAddNewJob, setShowAddNewJob] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errMess, seterrMess] = useState();

  useEffect(() => {
    async function getData() {
      await axios
        .get(`${baseUrl}job/Alljobs/`)
        .then((response) => setJobs(response.data), setIsLoading(false))
        .catch((error) => seterrMess(error.response.data));
    }
    getData();
  }, []);
  const handleShowAddNewJob = () => setShowAddNewJob(true);
  const handleCloseAddNewJob = () => setShowAddNewJob(false);

  const { mercId } = useParams();

  const job = jobs.map((job, index) => (
    <div key={index}>
      <Accordion defaultActiveKey="0">
        <JobCard job={job} mercId={mercId} />
      </Accordion>
    </div>
  ));

  if (isLoading) {
    return (
      <Container>
        <Row>
          <Loading />
        </Row>
      </Container>
    );
  } else if (errMess) {
    return (
      <Container>
        <Row>
          <Col>
            <h4>{errMess}</h4>
          </Col>
        </Row>
      </Container>
    );
  } else
    return (
      <>
        <Container>
          <Row>
            <Col>
              <h1>Jobs</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">{job}</Row>
          <Row className="justify-content-md-center">
            <Button
              variant="dark"
              style={{ float: "right", width: "50rem" }}
              onClick={handleShowAddNewJob}
            >
              Add a new job
            </Button>
          </Row>
        </Container>
        <AddNewJob show={showAddNewJob} handleClose={handleCloseAddNewJob} />
      </>
    );
};

export default Jobs;
