import React, { useState, useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { getMercs, getGuns, deleteMerc } from '../actions'
import { Image, Container, Row, Col, Button } from 'react-bootstrap'
import { MercCard } from './MercCard'
import { AddNewMerc } from './AddNewMerc'
import { Loading } from './Loading'

const Mercs = ({ mercsList, gunsList }) => {
	const [showAddNewMerc, setShowAddNewMerc] = useState(false)
	const [isLoading, setIsLoading] = useState(true)
	//const [errMess, seterrMess] = useState()

	const dispatch = useDispatch()

	const handleShowAddNewMerc = () => setShowAddNewMerc(true)
	const handleCloseAddNewMerc = () => setShowAddNewMerc(false)

	const handleDelete = (mercId) => {
		//API not implemented yet
		dispatch(deleteMerc(mercId))
	}

	useEffect(() => {
		if (isLoading && mercsList.length === 0) {
			dispatch(getMercs())
		}
		if (isLoading && gunsList.length === 0) {
			dispatch(getGuns())
		}

		if (gunsList.length !== 0 && mercsList.length !== 0) {
			setIsLoading(false)
		}
	}, [dispatch, isLoading, mercsList, gunsList])

	const merc = mercsList.map((merc, index) => (
		<div key={index}>
			<MercCard merc={merc} weapons={gunsList} handleDelete={handleDelete} />
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
			<>
				<Container>
					<Row>
						<Col>
							<h1>Mercs</h1>
						</Col>
					</Row>
					<Row className='justify-content--center'>
						{merc}
						<Button
							variant='light'
							onClick={handleShowAddNewMerc}
							style={{ width: '18rem', height: '13.4rem', marginLeft: '15px' }}
						>
							<Image src='/Img/plus.svg' height='160' width='40' />
						</Button>
					</Row>
				</Container>
				<AddNewMerc show={showAddNewMerc} handleClose={handleCloseAddNewMerc} />
			</>
		)
}

Mercs.propTypes = {
	gunsList: PropTypes.array.isRequired,
	mercsList: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
	mercsList: state.mercs.mercs,
	isLoading: state.mercs.isLoading,
	errMess: state.mercs.errMess,
	gunsList: state.guns.gunsList,
})

export default connect(mapStateToProps)(Mercs)
