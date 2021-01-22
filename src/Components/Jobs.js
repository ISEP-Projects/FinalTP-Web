import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap'
import { JobCard } from './JobCard'
import { AddNewJob } from './AddNewJob'
import { Loading } from './Loading'
import { SelectMerc } from './SelectMerc'
import { useParams } from 'react-router-dom'
import {
	deleteJob,
	getJobs,
	showAddJobForm,
	getJobDone,
	getMercs,
} from '../actions'

const Jobs = ({
	mercsList,
	jobsList,
	isLoading,
	errMess,
	showForm,
	handleShowAddNewJob,
	handleCloseAddNewJob,
	handleGetMercs,
	handleGetJobs,
	handleDelete,
	handleGetJobDone,
}) => {
	const [mercId, setMercID] = useState(0)

	useEffect(() => {
		if (isLoading && jobsList.length === 0) {
			handleGetJobs()
		}
		if (isLoading && mercsList.length === 0) {
			handleGetMercs()
		}
	}, [handleGetJobs, handleGetMercs, isLoading, jobsList, mercsList])

	const { tempId } = useParams()

	if (tempId !== undefined && mercId === 0) {
		setMercID(tempId)
	}

	const onChangeMerc = (e) => {
		setMercID(e.target.value)
	}

	const job = jobsList.map((job, index) => (
		<div key={index}>
			<Accordion defaultActiveKey='0'>
				<JobCard
					job={job}
					mercId={mercId}
					handleDelete={handleDelete}
					handleGetJobDone={handleGetJobDone}
				/>
			</Accordion>
		</div>
	))

	if (isLoading) {
		return (
			<Container className='Container'>
				<Row>
					<Loading />
				</Row>
			</Container>
		)
	} else if (errMess) {
		return (
			<Container className='Container'>
				<Row>
					<Col>
						<h4>{errMess}</h4>
					</Col>
				</Row>
			</Container>
		)
	} else {
		return (
			<>
				<Container className='Container'>
					<Row>
						<Col>
							<h1>Jobs</h1>
						</Col>
					</Row>
					<Row className='justify-content-md-center'>
						<Col xs='auto'>
							<SelectMerc
								mercId={mercId}
								mercsList={mercsList}
								onChangeMerc={onChangeMerc}
							/>
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
}
const mapStateToProps = (state) => ({
	mercsList: state.mercs.mercs,
	jobsList: state.jobs.jobs,
	isLoading: state.jobs.isLoading,
	errMess: state.jobs.errMess,
	showForm: state.jobs.showForm,
})

const mapDispatchToProps = (dispatch) => ({
	handleShowAddNewJob: () => dispatch(showAddJobForm(true)),
	handleCloseAddNewJob: () => dispatch(showAddJobForm(false)),
	handleGetMercs: () => dispatch(getMercs()),
	handleGetJobs: () => dispatch(getJobs()),
	handleDelete: (jobId) => dispatch(deleteJob(jobId)),
	handleGetJobDone: (mercId, jobId) => dispatch(getJobDone(mercId, jobId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
