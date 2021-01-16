import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { GunCard } from './GunCard'
import PropTypes from 'prop-types'
import { connect, useDispatch } from 'react-redux'
import { Loading } from './Loading'
import { getGuns } from '../actions'

const Weapons = ({ gunsList }) => {
	//const [weapons, setWeapons] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	//const [errMess, seterrMess] = useState()

	const dispatch = useDispatch()

	useEffect(() => {
		if (isLoading && gunsList.length === 0) {
			dispatch(getGuns())
		}
		if (gunsList.length !== 0) {
			setIsLoading(false)
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
	} /* else if (errMess) {
		return (
			<Container>
				<Row>
					<Col>
						<h4>{errMess}</h4>
					</Col>
				</Row>
			</Container>
		)
	}*/ else
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
	isLoading: PropTypes.bool.isRequired
}
const mapStateToProps = (state) => ({
	gunsList: state.guns.gunsList,
})

/*
const mapDispatchToProps = (dispatch) => ({
	somefunction: (song) => dispatch(removeSongActionCreator(song)),
})
*/

export default connect(mapStateToProps)(Weapons)
