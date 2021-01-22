import { Card, Button, Accordion, Col, Row } from "react-bootstrap";
import { SetToast } from "./SetToast";

export const JobCard = ({
  job,
  mercId,
  handleDelete,
  handleGetJobDone,
  content,
  showToast,
  handleShowToast,
}) => {
  return (
    <Card style={{ width: "50rem", color: "#000", textAlign: "left" }}>
      <Accordion.Toggle as={Card.Header} variant="link" eventKey={job.id}>
        <Row>
          <Col>{job.title}</Col>
          <Col style={{ textAlign: "right" }}>
            {"By "}
            {job.fixer}
          </Col>
        </Row>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={job.id}>
        <Card.Body>
          <SetToast text={content} show={showToast} setShow={handleShowToast} />
          <Card.Text>{job.description}</Card.Text>
          <Card.Text>henchmenCount: {job.henchmenCount}</Card.Text>
          <Card.Text>reward: {job.reward}</Card.Text>
          <Button
            variant="outline-info"
            disabled={!job.isAvailable}
            onClick={() => handleGetJobDone(mercId, job.id)}
          >
            Initiate
          </Button>
          <Button
            variant="outline-danger"
            disabled={job.isAvailable}
            onClick={() => handleDelete(job.id)}
            style={{ float: "right" }}
          >
            Delete
          </Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
