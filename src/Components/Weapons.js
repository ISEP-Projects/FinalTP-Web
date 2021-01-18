import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { GunCard } from './GunCard'
import PropTypes from 'prop-types'
import { connect, useDispatch } from 'react-redux'
import { Loading } from './Loading'
import { getGuns } from '../actions'

const Weapons = ({ gunsList, isLoading, errMess }) => {

	const dispatch = useDispatch()

	useEffect(() => {
		if (isLoading && gunsList.length === 0) {
			dispatch(getGuns())
		}
	}, [dispatch, isLoading, gunsList])

	console.log('Guns list')
	console.log(gunsList)

	const { mercId } = useParams()
	console.log({ mercId })

	const weapon = gunsList.map((gun, index) => (
		<div key={index}>
			<GunCard gun={gun} mercId={mercId} />
		</div>
	))
	if (isLoading) {
		return (
			<Container>
				<Row>
					<Loading />
				</Row>
			</Container>
		)
	}  else if (errMess) {
		return (
			<Container>
				<Row>
					<Col>
						<h4>{errMess}</h4>
					</Col>
				</Row>
			</Container>
		)
	} else
		return (
			<Container>
				<Row>
					<Col>
						<h1>Weapons</h1>
					</Col>
				</Row>
				<Row className='justify-content--center'>{weapon}</Row>
			</Container>
		)
}

Weapons.propTypes = {
	gunsList: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	errMess: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
	gunsList: state.guns.gunsList,
	isLoading: state.guns.isLoading,
	errMess: state.guns.errMess
})

/*
const mapDispatchToProps = (dispatch) => ({
	somefunction: (song) => dispatch(removeSongActionCreator(song)),
})
*/

export default connect(mapStateToProps)(Weapons)
