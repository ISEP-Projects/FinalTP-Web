import { Card, Button, Accordion, Col, Row } from 'react-bootstrap'

export const JobCard = ({ job, mercId }) => {
	const handleChoose = () => {
		//get API
	}
	const button = !mercId ? (
		<div></div>
	) : (
		<Button
			variant='outline-info'
			disabled={!job.isAvailable}
			onClick={handleChoose}
		>
			Choose
		</Button>
	)
	return (
		<Card style={{ width: '50rem', color: '#000', textAlign: 'left' }}>
			<Accordion.Toggle as={Card.Header} variant='link' eventKey={job.id}>
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
					<Card.Text>henchmenCount: {job.henchmenCount}</Card.Text>
					<Card.Text>reward: {job.reward}</Card.Text>
					{button}
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	)
}
