import { connect, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import { getGuns, getMercs, buyGun, setShowToast } from '../actions'
import { GunCard } from './GunCard'
import { Loading } from './Loading'
import { SetToast } from './Toast'
import { SelectMerc } from './SelectMerc'

const Weapons = ({
	mercsList,
	gunsList,
	isLoading,
	errMess,
	content,
	showToast,
	handleShowToast,
}) => {
	const dispatch = useDispatch()

	const [mercID, setMercID] = useState(0)

	useEffect(() => {
		if (isLoading && mercsList.length === 0) {
			dispatch(getMercs())
		}
		if (isLoading && gunsList.length === 0) {
			dispatch(getGuns())
		}
	}, [dispatch, isLoading, mercsList, gunsList])

	const handleBuy = (gunId) => {
		console.log('Buying ' + gunId + ' for ' + mercID)
		dispatch(buyGun(mercID, gunId))
	}

	const { mercId } = useParams()
	if (mercId !== undefined && mercID === 0) {
		setMercID(mercId)
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
					<SetToast text={content} show={showToast} setShow={handleShowToast} />
				</Row>
				<Row>
					<Col>
						<h1>Weapons</h1>
					</Col>
				</Row>
				<Row>
					<Col xs='auto'>
						<SelectMerc
							mercID={mercID}
							mercsList={mercsList}
							onChangeMerc={onChangeMerc}
						/>
					</Col>
				</Row>
				<Row className='justify-content--center'>{weapon}</Row>
			</Container>
		)
}

Weapons.propTypes = {
	gunsList: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
}
const mapStateToProps = (state) => ({
	mercsList: state.mercs.mercs,
	isLoading: state.mercs.isLoading,
	errMess: state.mercs.errMess,
	gunsList: state.guns.gunsList,
	showForm: state.mercs.showForm,
	content: state.toast.content,
	showToast: state.toast.show,
})
const mapDispatchToProps = (dispatch) => ({
	handleShowToast: (bool) => dispatch(setShowToast(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Weapons)
