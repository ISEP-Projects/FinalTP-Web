import { Card, Button, Col, Row, Image } from 'react-bootstrap'

export const GunCard = ({ gun, handleBuy }) => {
	return (
		<Col>
			<Card style={{ width: '15rem', marginBottom: '15px' }}>
				<Card.Header>{gun.name}</Card.Header>
				<Card.Body>
					<Row>
						<Col>
							<Image src='/Img/blood.svg' height='15' width='30' /> {gun.damage}
						</Col>
						<Col>
							<Image src='/Img/accuracy.svg' height='15' width='30' />{' '}
							{gun.accuracy}
						</Col>
					</Row>
					<Row>
						<Col>
							<Image src='/Img/bullet.svg' height='15' width='30' />{' '}
							{gun.firerate}
						</Col>
						<Col>
							<Image src='/Img/price.svg' height='15' width='30' /> {gun.price}
						</Col>
					</Row>
					<Card.Text style={{ textAlign: 'left' }}>{gun.description}</Card.Text>
					<Button
						variant='dark'
						style={{ textAlign: 'center' }}
						onClick={() => {
							handleBuy(gun.id)
						}}
					>
						Buy
					</Button>
				</Card.Body>
			</Card>
		</Col>
	)
}
