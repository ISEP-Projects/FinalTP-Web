import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect, useDispatch } from 'react-redux'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap'
import { JobCard } from './JobCard'
import { AddNewJob } from './AddNewJob'
import { Loading } from './Loading'
import { useParams } from 'react-router-dom'
import { getJobs, showAddJobForm } from '../actions'

const Jobs = ({ jobsList, isLoading, errMess,  showForm, handleShowAddNewJob, handleCloseAddNewJob}) => {
	const dispatch = useDispatch()

	useEffect(() => {
		if (isLoading && jobsList.length === 0) {
			dispatch(getJobs())
		}

	}, [dispatch, isLoading, jobsList])

	const { mercId } = useParams()

	const job = jobsList.map((job, index) => (
		<div key={index}>
			<Accordion defaultActiveKey='0'>
				<JobCard job={job} mercId={mercId} />
			</Accordion>
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
	}  else {
		return (
			<>
				<Container>
					<Row>
						<Col>
							<h1>Jobs</h1>
						</Col>
					</Row>
					<Row className='justify-content-md-center'>{job}</Row>
					<Row className='justify-content-md-center'>
						<Button
							variant='dark'
							style={{ float: 'right', width: '50rem' }}
							onClick={handleShowAddNewJob}
						>
							Add a new job
						</Button>
					</Row>
				</Container>
				<AddNewJob show={showForm} handleClose={handleCloseAddNewJob} />
			</>
		)
	}
}

Jobs.propTypes = {
	jobsList: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	errMess: PropTypes.object.isRequired,
}
const mapStateToProps = (state) => ({
	jobsList: state.jobs.jobs,
	isLoading: state.jobs.isLoading,
	errMess: state.jobs.errMess,
	showForm: state.jobs.showForm
})

const mapDispatchToProps = (dispatch) => ({
	handleShowAddNewJob: () => dispatch(showAddJobForm(true)),
	handleCloseAddNewJob: () => dispatch(showAddJobForm(false))
})

export default connect(mapStateToProps,mapDispatchToProps)(Jobs)
