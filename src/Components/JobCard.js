import { Card, Button, Accordion, Col, Row, Image } from 'react-bootstrap';

export const JobCard = ({
  job,
  mercId,
  handleDelete,
  handleGetJobDone,
}) => {
  return (
    <Card
      data-testid="jobCard"
      style={{ width: '50rem', color: '#000', textAlign: 'left' }}
    >
      <Accordion.Toggle as={Card.Header} variant="link" eventKey={job.id}>
        <Row>
          <Col>{job.title}</Col>
          <Col style={{ textAlign: 'right' }}>
            {'By '}
            {job.fixer}
          </Col>
        </Row>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={job.id}>
        <Card.Body>
          <Card.Text>{job.description}</Card.Text>
          <Card.Text><Image src='/Img/henchmen.svg' height='20' width='30' /> {job.henchmenCount}</Card.Text>
          <Card.Text><Image src='/Img/dollar.svg' height='20' width='30' /> {job.reward}</Card.Text>
          <Button
            variant="outline-info"
            disabled={!job.isAvailable}
            onClick={() => handleGetJobDone(mercId, job.id, job.reward)}
          >
            Initiate
          </Button>
          <Button
            variant="outline-danger"
            disabled={job.isAvailable}
            onClick={() => handleDelete(job.id)}
            style={{ float: 'right' }}
          >
            Delete
          </Button>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
