import { connect, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import { getGuns, getMercs, buyGun } from '../actions'
import { GunCard } from './GunCard'
import { Loading } from './Loading'
import { SelectMerc } from './SelectMerc'

const Weapons = ({ mercsList, gunsList, isLoading, errMess }) => {
	const dispatch = useDispatch()

	const [mercID, setMercID] = useState(0)
	const availableMercList = mercsList.filter((merc) => merc.isAlive)
	useEffect(() => {
		if (isLoading && mercsList.length === 0) {
			dispatch(getMercs())
		}
		if (isLoading && gunsList.length === 0) {
			dispatch(getGuns())
		}
	}, [dispatch, isLoading, mercsList, gunsList])

	const handleBuy = (gunId) => {
		dispatch(buyGun(mercID, gunId))
	}

	const { mercId } = useParams()
	if (mercID === 0) {
		if (mercId !== undefined) {
			setMercID(mercId)
		} else if (mercId === undefined && availableMercList.length !== 0) {
			setMercID(availableMercList[0].id)
		}
	}

	const onChangeMerc = (e) => {
		setMercID(e.target.value)
	}

	const weapon = gunsList.map((gun, index) => (
		<div key={index}>
			<GunCard gun={gun} mercId={mercID} handleBuy={handleBuy} />
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
	} else if (errMess) {
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
				<Row className="justify-content-center">
					<Col xs="auto">
						<SelectMerc
							mercID={mercID}
							mercsList={availableMercList}
							onChangeMerc={onChangeMerc}
						/>
					</Col>
				</Row>
				<Row className="justify-content-center">{weapon}</Row>
			</Container>
		)
}

Weapons.propTypes = {
	gunsList: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	mercsList: PropTypes.array.isRequired,
	errMess: PropTypes.string,
	showForm: PropTypes.bool.isRequired,
}
const mapStateToProps = (state) => ({
	mercsList: state.mercs.mercs,
	isLoading: state.mercs.isLoading,
	errMess: state.mercs.errMess,
	gunsList: state.guns.gunsList,
	showForm: state.mercs.showForm,
})

export default connect(mapStateToProps)(Weapons)
