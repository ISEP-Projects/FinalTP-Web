import { useDispatch } from 'react-redux'
import { Card, Button, Col, Row, Image } from 'react-bootstrap'
import { buyGun } from '../actions'

export const GunCard = ({ gun, mercId }) => {
	const dispatch = useDispatch()

	const handleBuy = (gunId) => {
		console.log('Buying ' + gunId + ' for ' + mercId)
		dispatch(buyGun(mercId, gunId))
	}

	const button = !mercId ? (
		<div></div>
	) : (
		<Button
			variant='dark'
			style={{ textAlign: 'center' }}
			onClick={() => {
				handleBuy(gun.id)
			}}
		>
			Buy
		</Button>
	)
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
					{button}
				</Card.Body>
			</Card>
		</Col>
	)
}
